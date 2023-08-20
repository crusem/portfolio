<script>
	import Header from '../components/organisms/header.svelte';
	import Footer from '../components/organisms/footer.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style lang="scss">
	@import '../styles/variables.scss';

	:global(*) {
		margin: 0;
		border: 0;
		padding: 0;
	}

	:global(body) {
		background-color: $background-color;
		color: $color;
		font-family: sans-serif;
		font-size: 1rem;
	}

	:global(main) {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		margin: 0 auto calc(#{$header-and-footer-height} + #{$header-and-footer-padding} + #{$header-and-footer-margin} + 1px);
		padding: $main-padding;
		min-height: calc(
			100vh - 2 * #{$header-and-footer-height} - 2 * #{$header-and-footer-padding} - 2 * #{$header-and-footer-margin} -
				2 * #{$main-padding}
		);
		width: 100%;
		max-width: calc(100vw - 2 * 1.5rem);
		overflow-x: hidden;

		@media (min-width: 768px) {
			max-width: calc(768px - 2 * 1.5rem);
		}
	}

	:global(h1) {
		width: fit-content;
		font-size: 2rem;
		text-transform: uppercase;
		padding: 1em 0 0.5em;
		color: $highlight-color;
	}

	:global(h2) {
		width: fit-content;
		font-size: 1.5rem;
		padding: 1em 0 0.5em;
	}

	:global(h3) {
		width: fit-content;
		font-size: 1.25rem;
		padding: 1em 0 0.5em;
	}

	:global(h1 + p),
	:global(h2 + p),
	:global(h3 + p) {
		padding-top: 0;
	}

	:global(p) {
		font-family: serif;
		padding: 1em 0 0.5em;
	}

	:global(.mark) {
		font-weight: 800;
	}
</style>