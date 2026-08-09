<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let canvas: HTMLCanvasElement;

	const vertexShader = /* glsl */ `
		void main() {
			gl_Position = vec4(position, 1.0);
		}
	`;

	const fragmentShader = /* glsl */ `
		precision highp float;

		uniform float uTime;
		uniform vec2  uPointer;
		uniform float uScroll;
		uniform float uTheme;
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
				mix(dot(hash22(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
					dot(hash22(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
				mix(dot(hash22(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
					dot(hash22(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
				u.y);
		}

		float fbm(vec2 p) {
			float v = 0.0;
			float a = 0.5;
			for (int i = 0; i < 3; i++) {
				v += a * gnoise(p);
				p = p * 2.02 + 11.7;
				a *= 0.5;
			}
			return v;
		}

		// Inigo Quilez style domain warp: cheap, organic, no visible tiling.
		float warp(vec2 p, float t) {
			vec2 q = vec2(fbm(p + vec2(0.0, t * 0.35)), fbm(p + vec2(4.7, 1.9) - t * 0.24));
			return fbm(p + 2.6 * q);
		}

		void main() {
			vec2 res = uResolution;
			vec2 uv = gl_FragCoord.xy / res;
			float aspect = res.x / max(res.y, 1.0);
			vec2 st = vec2(uv.x * aspect, uv.y);

			float t = uTime * 0.05;
			// Scroll shifts the noise field, so the page reads as travel through one continuous space.
			float travel = uScroll * 2.4;

			vec2 pp = vec2(uPointer.x * aspect, uPointer.y);
			float toPointer = distance(st, pp);
			float parallax = (1.0 - smoothstep(0.0, 1.1, toPointer)) * 0.05;

			float field = warp(st * 1.35 + vec2(t * 0.6, travel) + parallax, t);

			float glow = 0.0;
			float gold = 0.0;
			for (int i = 0; i < 3; i++) {
				float fi = float(i);
				float centre = 0.30 + fi * 0.24 + field * (0.30 - fi * 0.05);
				float d = abs(uv.y - centre);
				float ribbon = exp(-d * (11.0 - fi * 2.6));
				glow += ribbon * (0.62 - fi * 0.14);
				gold += ribbon * step(1.5, fi);
			}

			// Pointer bloom: the cursor lifts the field it passes over.
			float bloom = exp(-toPointer * 3.4) * 0.32;
			glow += bloom;

			vec3 emerald   = vec3(0.216, 0.624, 0.463);
			vec3 emerald2  = vec3(0.306, 0.761, 0.580);
			vec3 champagne = vec3(0.831, 0.686, 0.216);

			vec3 col = emerald * glow;
			col += emerald2 * pow(max(glow, 0.0), 2.4) * 0.85;
			col += champagne * gold * 0.10;
			col += champagne * bloom * 0.22;

			// Vignette keeps type legible against the brightest part of the field.
			float vig = smoothstep(1.32, 0.28, length((uv - 0.5) * vec2(aspect * 0.72, 1.0)) * 1.28);
			col *= vig;

			float alpha = clamp(glow * 0.92, 0.0, 1.0) * 0.58 * vig;

			// Light theme: subtle, soft pastel ink ramp on clean white background.
			vec3 lightCol = mix(emerald2 * 1.2, vec3(0.12, 0.55, 0.40), clamp(glow, 0.0, 1.0));
			lightCol = mix(lightCol, champagne * 1.1, clamp(gold * 0.5 + bloom, 0.0, 1.0));
			float lightAlpha = clamp(glow * 1.05, 0.0, 1.0) * 0.15 * vig;
			col = mix(col, lightCol, uTheme);
			alpha = mix(alpha, lightAlpha, uTheme);

			// Film grain plus triangular-PDF dither removes gradient banding on wide gamut panels.
			float g1 = hash12(gl_FragCoord.xy + fract(uTime) * 91.7);
			float g2 = hash12(gl_FragCoord.xy * 1.37 - fract(uTime) * 57.1);
			col += (g1 - g2) * 0.016;
			col += (g1 - g2) / 255.0;

			gl_FragColor = vec4(max(col, vec3(0.0)), alpha);
		}
	`;

	onMount(() => {
		if (!canvas) return;

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
			// No WebGL: the page still reads correctly on its own background tokens.
			canvas.style.display = 'none';
			return;
		}

		renderer.setPixelRatio(1);

		const uniforms = {
			uTime: { value: 0 },
			uPointer: { value: new THREE.Vector2(0.5, 0.62) },
			uScroll: { value: 0 },
			uTheme: { value: root.getAttribute('data-theme') === 'light' ? 1 : 0 },
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

		// The field is intentionally soft, so it is rendered below native resolution
		// and upscaled by the compositor. Costs roughly a third of the fill rate.
		function quality() {
			return window.innerWidth < 900 ? 0.45 : 0.58;
		}

		function resize() {
			const q = quality();
			const w = Math.max(1, Math.round(window.innerWidth * q));
			const h = Math.max(1, Math.round(window.innerHeight * q));
			renderer.setSize(w, h, false);
			uniforms.uResolution.value.set(w, h);
		}

		const pointerTarget = new THREE.Vector2(0.5, 0.62);
		function onPointer(e: PointerEvent) {
			pointerTarget.set(e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight);
		}

		// Scroll progress comes from a ScrollTimeline where available, so no scroll
		// listener and no per-frame layout read are needed.
		let scrollTimeline: AnimationTimeline | null = null;
		if ('ScrollTimeline' in window) {
			try {
				scrollTimeline = new (window as unknown as {
					ScrollTimeline: new (o: object) => AnimationTimeline;
				}).ScrollTimeline({ source: root, axis: 'block' });
			} catch {
				scrollTimeline = null;
			}
		}

		function readScroll() {
			if (scrollTimeline) {
				const ct = scrollTimeline.currentTime as CSSUnitValue | null;
				if (ct) return ct.value / 100;
			}
			const span = root.scrollHeight - root.clientHeight;
			return span > 0 ? root.scrollTop / span : 0;
		}

		const themeObserver = new MutationObserver(() => {
			uniforms.uTheme.value = root.getAttribute('data-theme') === 'light' ? 1 : 0;
			if (reduceMotion.matches) renderer.render(scene, camera);
		});
		themeObserver.observe(root, { attributes: true, attributeFilter: ['data-theme'] });

		const clock = new THREE.Clock();
		let frame = 0;

		function loop() {
			frame = requestAnimationFrame(loop);
			if (document.hidden) return;
			uniforms.uTime.value = clock.getElapsedTime();
			uniforms.uScroll.value += (readScroll() - uniforms.uScroll.value) * 0.12;
			uniforms.uPointer.value.lerp(pointerTarget, 0.045);
			renderer.render(scene, camera);
		}

		function start() {
			cancelAnimationFrame(frame);
			if (reduceMotion.matches) {
				uniforms.uTime.value = 6.0;
				uniforms.uScroll.value = readScroll();
				renderer.render(scene, camera);
				return;
			}
			loop();
		}

		function onResize() {
			resize();
			if (reduceMotion.matches) renderer.render(scene, camera);
		}

		resize();
		start();

		window.addEventListener('resize', onResize);
		window.addEventListener('pointermove', onPointer, { passive: true });
		reduceMotion.addEventListener('change', start);

		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('resize', onResize);
			window.removeEventListener('pointermove', onPointer);
			reduceMotion.removeEventListener('change', start);
			themeObserver.disconnect();
			geometry.dispose();
			material.dispose();
			renderer.dispose();
		};
	});
</script>

<canvas id="webgl-canvas" bind:this={canvas} aria-hidden="true"></canvas>
