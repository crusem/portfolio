<script>
	import GraphicLink from '../atoms/graphicLink.svelte';
</script>

<footer>
	<ul>
		<li>
			<GraphicLink src="/github.svg" url="https://github.com/crusem" alt="github" />
		</li>
	</ul>
</footer>

<style lang="scss" scoped>
	@import '../../styles/variables.scss';

	footer {
		position: fixed;
		bottom: 0;
		background-color: $background-color;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		margin-top: $header-and-footer-margin;
		padding: $header-and-footer-padding;
		height: $header-and-footer-height;
		width: calc(100% - 2 * #{$header-and-footer-padding});

		ul {
			display: inherit;
			gap: 1rem;

			li {
				display: inherit;
				flex-grow: inherit;
				align-items: center;
			}
		}
	}
</style>