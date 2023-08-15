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
		justify-content: center;
		margin: 0 auto;
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
		font-size: 2rem;
		text-transform: uppercase;
		padding: 1em 0 0.5em;
	}

	:global(p) {
		font-family: serif;
		padding: 1em 0 0.5em;
	}
</style>
