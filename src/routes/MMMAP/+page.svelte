<script>
	import Image from '../../components/atoms/image.svelte';
</script>

<style>
  /* Style the <a> tags to inherit color from their parent <p> */
  p a {
    color: inherit;
    text-decoration: underline; /* Optional: Add underline to links */
  }
</style>

<h1>MMMAP</h1>
<p>
For my capstone project in the Master’s in Urban Spatial Analytics program at the University of Pennsylvania Weitzman School of Design, I developed MMMAP—a website that leverages geocoding, web scraping, and the Spotify API to build a database and map the geographic origins of artists in a user’s Spotify library.
</p>

<h2>How it Works</h2>
<Image baseUrl="/mmmap_flowchart/" className = image-container alt="Description of your image" />
<p>
To begin making a user's custom map, MMMAP utilizes the Spotify API to fetch user's saved tracks. Next, for each artist in a user's library, there is a frequeny value that represents the number of times the artist is represented in the user's library. After using webscraping to extract each artist's birthplace and geocoding the provided birthplace, MMMap creates a heatmap! The MMMap database contains over 84,000 artists provided by Localify, a platform that personalizes local music recommendations by integrating Spotify playlists with tracks from local artists. Each time a new user uses MMMap, the artists they listen to are added to MMMap's  database.
</p>

<h2>Example</h2>
<Image baseUrl="/mmmap_example/" className = image-container alt="Description of your image" />

<p> Curious about where your music is from? - 
  <a href="https://mmmapproject.com" target="_blank">Click here to visit the site!</a> Because of hosting constraints, MMMAP may load slowly at first — thanks for waiting!
</p>

