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

<h1>MMMap</h1>
<div>
  <!-- Example using a custom Image component -->
  <Image baseUrl="/mmmap/" className = image-container alt="Description of your image" />
</div>
<p>
  MMMap is a tool that reads every track in your Spotify library, and creates a heatmap based on the birthplace of artists who contributed to the track.
</p>

<p>
  To begin making a user's custom map, MMMap utilizes the Spotify API to fetch user's saved tracks. Next, for each artist in a user's library, there is a frequeny value that represents the number of times the artist is represented in the user's library. After using webscraping to extract each artist's birthplace and geocoding the provided birthplace, MMMap creates a heatmap! The MMMap database contains over 84,000 artists provided by Localify, a platform that personalizes local music recommendations by integrating Spotify playlists with tracks from local artists. Each time a new user uses MMMap, the artists they listen to are added to MMMap's  database.
</p>

<Image baseUrl="/mmmap_example/" className = image-container alt="Description of your image" />

<p> MMMAP is currently under construction, but if you're curious - 
  <a href="https://mmmapproject.com" target="_blank">Click here to visit the site!</a> 
</p>
