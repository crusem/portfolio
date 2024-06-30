<script>
	import Image from '/src/components/atoms/image.svelte';
</script>

<section>
	<div>
		<Image baseUrl="/avatar/" className="circle" loading="eager" />
	</div>
	<div>
		<h1>Marissa Cruse</h1>
		<p>	
		I was born and raised in the St. Louis area and moved to Nebraska to study Economics at the University of Nebraska - Lincoln. After graduating, I moved to Philadelphia, PA and went on to graduate with my Master's of Urban Spatial Analytics from the University of Pennsylvania. Through my lived experiences and academic training, I have found a passion for combining the power of lived-experiences and data analytics to amplify the voices of the marginalized.
		</p>
		<h2>Interests</h2>
		<p>	
		Data analytics & data viz, spatial analytics, UI Design, community empowerment, equitable cities, and sustainability!	
		</p>

		<h2>Skills</h2>
		<p>	
		R, Python, HTML, ArcGISPro, Excel, Django, Github,  JavaScript (Beginner), SQL (Beginner), Tableau (Beginner), Svelte (Beginner), Adobe Illustrator (Beginner), Adobe InDesign (Beginner), Canva		
		</p>
	</div>
</section>

<style lang="scss" scoped>
	@import '../styles/variables.scss';

	section {
		flex-grow: 1;
		flex-direction: row-reverse;

		@media (min-width: 768px) {
			display: flex;
			gap: 1rem;
		}

		div {
			display: flex;
			justify-content: center;
			flex-direction: column;
			padding: 1rem;
			overflow: hidden;
			margin: 0 auto;
			max-width: calc(768px / 2);

			@media (min-width: 768px) {
				width: 50%;
			}
		}
	}
</style>
