<script>
	// @ts-nocheck
	export let url;
	export let src;
	export let alt;
</script>

<a href={url} target="_blank" rel="noreferrer">
	<img {src} {alt} />
</a>

<style lang="scss">
	@import '../../styles/variables.scss';

	a {
		img {
			height: 2rem;
			width: 2rem;

			&:hover,
			&:focus {
				filter: brightness(0);
			}
		}
	}
</style>
