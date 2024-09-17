<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/MMMAP">MMMAP</a>
		</li>
		<li>
			<a href="/Lime">Data Analytics @ Lime</a>
		</li>
		<li>
			<a href="/DVRPC">Data Analytics @ DVRPC</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	@import '../../styles/variables.scss';

	nav {
		height: 100%;

		ul {
			display: flex;
			flex-direction: row;
			height: inherit;

			li {
				display: inherit;
				align-items: center;

				a {
					display: flex;
					flex-direction: column;
					justify-content: center;
					padding: 0 1rem;
					height: 100%;
					width: 100%;
					color: inherit;
					text-transform: uppercase;
					text-decoration: none;
					text-align: center;

					&:hover,
					&:focus {
						background-color: $color;
						color: $background-color;
					}
				}
			}
		}
	}
</style>
