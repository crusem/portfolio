<script>
	import Navigation from '../molecules/navigation.svelte';
</script>

<header>
	<Navigation />
</header>

<style lang="scss">
	@import '../../styles/variables.scss';

	header {
		margin-bottom: $header-and-footer-margin;
		padding: $header-and-footer-padding;
		height: $header-and-footer-height;
		width: calc(100% - 2 * #{$header-and-footer-padding});
	}
</style>
