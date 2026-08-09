<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';


	let canvas: HTMLCanvasElement;
	let box: HTMLElement;
	let unsupported = $state(false);

	const vertexShader = /* glsl */ `
		void main() {
			gl_Position = vec4(position, 1.0);
		}
	`;

	/* A broadcast propagating through a lattice: pulses leave the core, and each
	   node in the mesh lights up as the wave reaches it. */
	const fragmentShader = /* glsl */ `
		precision highp float;

		uniform float uTime;
		uniform float uTheme;
		uniform vec2  uPointer;
		uniform vec2  uResolution;

		float hash12(vec2 p) {
			vec3 p3 = fract(vec3(p.xyx) * 0.1031);
			p3 += dot(p3, p3.yzx + 33.33);
			return fract((p3.x + p3.y) * p3.z);
		}

		vec2 hash22(vec2 p) {
			vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
			p3 += dot(p3, p3.yzx + 33.33);
			return fract((p3.xx + p3.yz) * p3.zy) * 2.0 - 1.0;
		}

		float gnoise(vec2 p) {
			vec2 i = floor(p);
			vec2 f = fract(p);
			vec2 u = f * f * (3.0 - 2.0 * f);
			return mix(
				mix(dot(hash22(i), f), dot(hash22(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
				mix(dot(hash22(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
					dot(hash22(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
				u.y);
		}

		float fbm(vec2 p) {
			float v = 0.0;
			float a = 0.5;
			for (int i = 0; i < 3; i++) {
				v += a * gnoise(p);
				p = p * 2.03 + 7.3;
				a *= 0.5;
			}
			return v;
		}

		void main() {
			vec2 res = uResolution;
			vec2 uv = gl_FragCoord.xy / res;
			float aspect = res.x / max(res.y, 1.0);

			vec2 p = uv - 0.5;
			p.x *= aspect;
			p -= uPointer * 0.055;

			float t = uTime;
			float r = length(p);
			float ang = atan(p.y, p.x);

			// Warping the measured radius keeps the wavefronts from reading as clip art.
			float wobble = fbm(p * 2.7 + vec2(0.0, t * 0.09)) * 0.085;
			float rw = r + wobble;

			// Four pulses in flight at any moment, each fading as it travels out.
			float rings = 0.0;
			float front = 0.0;
			for (int i = 0; i < 4; i++) {
				float phase = fract(t * 0.155 + float(i) * 0.25);
				float radius = phase * 0.68;
				float width = 0.010 + phase * 0.055;
				float band = exp(-pow((rw - radius) / width, 2.0));
				float decay = (1.0 - phase) * (1.0 - phase);
				rings += band * decay;
				front = max(front, band * decay);
			}

			// Lattice of downline nodes. Base grid is always faintly present; the
			// passing wavefront is what makes each node flare.
			vec2 cell = p * 21.0;
			vec2 gid = floor(cell);
			vec2 gp = fract(cell) - 0.5;
			float jitter = hash12(gid) - 0.5;
			float node = exp(-length(gp + jitter * 0.32) * 11.0);
			node *= 0.5 + 0.5 * hash12(gid + 4.7);
			float reach = smoothstep(0.62, 0.06, r);
			float lattice = node * reach * (0.30 + front * 3.4);

			// Faint hairline mesh tying the nodes together.
			vec2 lineGrid = abs(fract(cell) - 0.5);
			float mesh = (1.0 - smoothstep(0.0, 0.045, min(lineGrid.x, lineGrid.y)));
			mesh *= reach * (0.03 + front * 0.42) * mix(1.0, 0.45, uTheme);

			// Directional rays, the broadcast leaving the core.
			float spokes = pow(abs(sin(ang * 7.0 + t * 0.05)), 22.0);
			spokes *= exp(-r * 3.1) * 0.26;

			float core = exp(-r * 13.0);
			float halo = exp(-r * 2.9) * 0.3;
			float breathe = 0.86 + 0.14 * sin(t * 1.5);

			float energy = rings * 0.95 + lattice + mesh + spokes + halo + core * breathe * 1.5;
			// Reaches zero well inside the canvas so its edge is never a visible seam.
			float fade = smoothstep(0.66, 0.06, r);

			vec3 emerald = vec3(0.216, 0.624, 0.463);
			vec3 emerald2 = vec3(0.306, 0.761, 0.580);
			vec3 champagne = vec3(0.831, 0.686, 0.216);

			vec3 dark = emerald * energy;
			dark += emerald2 * pow(max(energy, 0.0), 1.9) * 0.9;
			dark += champagne * (core * breathe * 0.85 + spokes * 0.2);

			// On white the same field has to read as ink, not as light.
			vec3 lightInk = mix(vec3(0.043, 0.404, 0.290), vec3(0.129, 0.549, 0.408), rings);
			vec3 light = mix(lightInk, vec3(0.616, 0.478, 0.075), clamp(core * 1.4, 0.0, 1.0));

			vec3 col = mix(dark, light, uTheme);
			float alpha = clamp(energy * mix(0.95, 0.28, uTheme), 0.0, 1.0) * fade;

			float g1 = hash12(gl_FragCoord.xy + fract(uTime) * 71.3);
			float g2 = hash12(gl_FragCoord.xy * 1.41 - fract(uTime) * 39.7);
			col += (g1 - g2) * 0.013;

			gl_FragColor = vec4(max(col, vec3(0.0)), alpha);
		}
	`;

	onMount(() => {
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
		const root = document.documentElement;

		let renderer: THREE.WebGLRenderer;
		try {
			renderer = new THREE.WebGLRenderer({
				canvas,
				alpha: true,
				antialias: false,
				premultipliedAlpha: false,
				powerPreference: 'high-performance'
			});
		} catch {
			unsupported = true;
			return;
		}
		renderer.setPixelRatio(1);

		const uniforms = {
			uTime: { value: 0 },
			uTheme: { value: root.getAttribute('data-theme') === 'light' ? 1 : 0 },
			uPointer: { value: new THREE.Vector2(0, 0) },
			uResolution: { value: new THREE.Vector2(1, 1) }
		};

		const scene = new THREE.Scene();
		const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
		const geometry = new THREE.PlaneGeometry(2, 2);
		const material = new THREE.ShaderMaterial({
			uniforms,
			vertexShader,
			fragmentShader,
			transparent: true,
			depthTest: false,
			depthWrite: false
		});
		scene.add(new THREE.Mesh(geometry, material));

		function resize() {
			const rect = canvas.getBoundingClientRect();
			const q = window.innerWidth < 900 ? 0.5 : 0.62;
			const w = Math.max(1, Math.round(rect.width * q));
			const h = Math.max(1, Math.round(rect.height * q));
			renderer.setSize(w, h, false);
			uniforms.uResolution.value.set(w, h);
		}

		const pointer = new THREE.Vector2(0, 0);
		const pointerTarget = new THREE.Vector2(0, 0);
		let tiltX = 0;
		let tiltY = 0;
		let tiltTargetX = 0;
		let tiltTargetY = 0;

		function onPointerMove(e: PointerEvent) {
			const rect = box.getBoundingClientRect();
			const nx = (e.clientX - rect.left) / rect.width - 0.5;
			const ny = (e.clientY - rect.top) / rect.height - 0.5;
			pointerTarget.set(nx, -ny);
			tiltTargetY = nx * 9;
			tiltTargetX = -ny * 7;
		}

		function onPointerLeave() {
			pointerTarget.set(0, 0);
			tiltTargetX = 0;
			tiltTargetY = 0;
		}

		const clock = new THREE.Clock();
		let frame = 0;
		let visible = true;

		function draw() {
			pointer.lerp(pointerTarget, 0.06);
			uniforms.uPointer.value.copy(pointer);
			tiltX += (tiltTargetX - tiltX) * 0.07;
			tiltY += (tiltTargetY - tiltY) * 0.07;
			box.style.setProperty('--rx', `${tiltX.toFixed(3)}deg`);
			box.style.setProperty('--ry', `${tiltY.toFixed(3)}deg`);
			renderer.render(scene, camera);
		}

		function loop() {
			frame = requestAnimationFrame(loop);
			if (document.hidden || !visible) return;
			uniforms.uTime.value = clock.getElapsedTime();
			draw();
		}

		function start() {
			cancelAnimationFrame(frame);
			if (reduceMotion.matches) {
				uniforms.uTime.value = 3.4;
				renderer.render(scene, camera);
				return;
			}
			loop();
		}

		const io = new IntersectionObserver(
			(entries) => {
				visible = entries[0].isIntersecting;
			},
			{ rootMargin: '120px' }
		);
		io.observe(box);

		const ro = new ResizeObserver(() => {
			resize();
			if (reduceMotion.matches) renderer.render(scene, camera);
		});
		ro.observe(box);

		const themeObserver = new MutationObserver(() => {
			uniforms.uTheme.value = root.getAttribute('data-theme') === 'light' ? 1 : 0;
			if (reduceMotion.matches) renderer.render(scene, camera);
		});
		themeObserver.observe(root, { attributes: true, attributeFilter: ['data-theme'] });

		resize();
		start();

		box.addEventListener('pointermove', onPointerMove);
		box.addEventListener('pointerleave', onPointerLeave);
		reduceMotion.addEventListener('change', start);

		return () => {
			cancelAnimationFrame(frame);
			io.disconnect();
			ro.disconnect();
			themeObserver.disconnect();
			box.removeEventListener('pointermove', onPointerMove);
			box.removeEventListener('pointerleave', onPointerLeave);
			reduceMotion.removeEventListener('change', start);
			geometry.dispose();
			material.dispose();
			renderer.dispose();
		};
	});
</script>

<div class="showcase" class:unsupported bind:this={box}>
	<canvas bind:this={canvas} aria-hidden="true"></canvas>
</div>

<style>
	.showcase {
		position: relative;
		width: 100%;
		display: grid;
		justify-items: center;
		gap: 20px;
		--rx: 0deg;
		--ry: 0deg;
	}

	/* The field is wider than the panel on purpose: the pulses have to be seen
	   leaving the conversation and travelling out past it. */
	canvas {
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		width: 190%;
		height: 155%;
		pointer-events: none;
	}

	.unsupported canvas {
		display: none;
	}


</style>
