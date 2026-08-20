<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		endDate: Date;
		label?: string;
		sessionInfo?: string;
	}

	let { endDate, label = 'MASA BERBAKI PENDAFTARAN', sessionInfo = '' }: Props = $props();

	let days = $state(0);
	let hours = $state(0);
	let minutes = $state(0);
	let seconds = $state(0);

	function updateCountdown() {
		const diff = endDate.getTime() - Date.now();

		if (diff <= 0) {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
			return;
		}

		days = Math.floor(diff / (1000 * 60 * 60 * 24));
		hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((diff % (1000 * 60)) / 1000);
	}

	onMount(() => {
		updateCountdown();
		const timer = setInterval(updateCountdown, 1000);
		return () => clearInterval(timer);
	});

	interface DigitUnit {
		value: number;
		label: string;
		pad: number;
	}

	const dDays = $derived(days);
	const dHours = $derived(hours);
	const dMinutes = $derived(minutes);
	const dSeconds = $derived(seconds);

	const units = $derived<DigitUnit[]>([
		{ value: dDays, label: 'Hari', pad: 1 },
		{ value: dHours, label: 'Jam', pad: 2 },
		{ value: dMinutes, label: 'Minit', pad: 2 },
		{ value: dSeconds, label: 'Saat', pad: 2 }
	]);

	function padNum(n: number, width: number): string {
		return String(n).padStart(width, '0');
	}
</script>

<div class="countdown-bar">
	<div class="countdown-header">
		<span class="pulse-dot"></span>
		<span class="countdown-label">{label}</span>
	</div>

	<div class="countdown-digits">
		{#each units as unit, i (unit.label)}
			{#if i > 0}
				<span class="digit-sep" aria-hidden="true">:</span>
			{/if}
			<div class="digit-unit">
				<div class="digit-value">
					{#each padNum(unit.value, unit.pad).split('') as ch, j (i + '-' + j)}
						<span class="digit-char" style="--n: {ch}">{ch}</span>
					{/each}
				</div>
				<span class="digit-label">{unit.label}</span>
			</div>
		{/each}
	</div>

	{#if sessionInfo}
		<div class="countdown-session">
			<span>{sessionInfo}</span>
		</div>
	{/if}
</div>

<style>
	.countdown-bar {
		display: inline-flex;
		align-items: center;
		gap: 20px;
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: var(--r-pill);
		padding: 10px 24px;
		box-shadow:
			0 1px 0 rgba(255, 255, 255, 0.06) inset,
			0 8px 24px -12px rgba(0, 0, 0, 0.4);
		flex-wrap: wrap;
		justify-content: center;
		backdrop-filter: blur(12px) saturate(140%);
	}

	.countdown-header {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.pulse-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--gold-2);
		box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.25);
		animation: pulse-beacon 2s ease-out infinite;
	}

	@keyframes pulse-beacon {
		0% {
			box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.25);
		}
		50% {
			box-shadow: 0 0 0 6px rgba(212, 175, 55, 0.08);
		}
		100% {
			box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.25);
		}
	}

	.countdown-label {
		font-family: var(--mono);
		font-size: 0.68rem;
		color: var(--ink-3);
		letter-spacing: 0.06em;
		font-weight: 600;
		white-space: nowrap;
	}

	.countdown-digits {
		display: flex;
		align-items: flex-end;
		gap: 4px;
	}

	.digit-unit {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2px;
		min-width: 36px;
	}

	.digit-value {
		display: flex;
		gap: 1px;
		font-family: var(--mono);
		font-size: 1.15rem;
		font-weight: 800;
		color: var(--gold-2);
		line-height: 1;
		letter-spacing: -0.02em;
	}

	.digit-char {
		display: inline-block;
		min-width: 0.62em;
		text-align: center;
	}

	.digit-label {
		font-family: var(--mono);
		font-size: 0.58rem;
		color: var(--ink-3);
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	.digit-sep {
		font-family: var(--mono);
		font-size: 1.1rem;
		font-weight: 400;
		color: var(--rule-2);
		align-self: center;
		margin-bottom: 14px;
	}

	.countdown-session {
		font-size: 0.78rem;
		color: var(--ink-2);
		padding-left: 16px;
		border-left: 1px solid var(--rule);
		white-space: nowrap;
	}

	@media (max-width: 600px) {
		.countdown-bar {
			flex-direction: column;
			border-radius: var(--r-lg);
			gap: 10px;
			padding: 14px 20px;
		}

		.countdown-session {
			padding-left: 0;
			border-left: none;
			border-top: 1px solid var(--rule);
			padding-top: 8px;
			width: 100%;
			text-align: center;
		}

		.digit-value {
			font-size: 1.3rem;
		}

		.digit-label {
			font-size: 0.62rem;
		}
	}
</style>
