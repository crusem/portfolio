<script>
	// @ts-nocheck
	const getCatFacts = async () => {
		return await fetch(
			'https://cat-fact.herokuapp.com/facts/'
		)
			.then((response) => response.json())
			.then((payload) => {
				//console.debug(payload);
				//console.debug(payload.items);
				return payload;
			});
	};

	let promise = getCatFacts();
</script>

{#await promise}
	<div class="loader" />
{:then catFact}
	{#each catFact as catFact}
		<p>{catFact.text}</p>
	{/each}
{:catch error}
	<p>{error.message}</p>
{/await}

<style lang="scss" scoped>
	@import '../../styles/variables.scss';

	.loader {
		margin: 1rem auto;

		border: 0.25rem solid #fff;
		border-top: 0.25rem solid $color;
		border-radius: 50%;

		width: 2rem;
		height: 2rem;

		-webkit-animation: spin 1s linear infinite; /* Safari */
		animation: spin 1s linear infinite;
	}

	@-webkit-keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
