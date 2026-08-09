<script lang="ts">
	let { isOpen = $bindable(false) } = $props();

	function close() {
		isOpen = false;
	}
</script>

{#if isOpen}
	<div
		class="modal-overlay open"
		onclick={close}
		onkeydown={(e) => e.key === 'Escape' && close()}
		tabindex="-1"
		role="dialog"
	>
		<div class="modal-container" onclick={(e) => e.stopPropagation()} role="document" tabindex="0">
			<div class="modal-header">
				<span>Demo Wajom - Sistem Automasi WhatsApp</span>
				<button class="modal-close" onclick={close} type="button" aria-label="Close modal">&times;</button>
			</div>
			<div class="video-wrapper">
				<iframe
					src="https://www.youtube.com/embed/8HbZVTGdzyc?autoplay=1&rel=0"
					title="Demo Wajom"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		</div>
	</div>
{/if}
