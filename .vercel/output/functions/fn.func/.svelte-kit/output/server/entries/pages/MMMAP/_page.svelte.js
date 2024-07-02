import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { I as Image } from "../../../chunks/image.js";
const css = {
  code: "p.svelte-fx0rzy a.svelte-fx0rzy{color:inherit;text-decoration:underline}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n\\timport Image from '../../components/atoms/image.svelte';\\r\\n<\/script>\\r\\n\\r\\n<style>\\r\\n  /* Style the <a> tags to inherit color from their parent <p> */\\r\\n  p a {\\r\\n    color: inherit;\\r\\n    text-decoration: underline; /* Optional: Add underline to links */\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<h1>MMMap</h1>\\r\\n<div>\\r\\n  <!-- Example using a custom Image component -->\\r\\n  <Image baseUrl=\\"/mmmap/\\" className = image-container alt=\\"Description of your image\\" />\\r\\n</div>\\r\\n<p>\\r\\n  MMMap is a tool that reads every track in your Spotify library, and creates a heatmap based on the birthplace of artists who contributed to the track.\\r\\n</p>\\r\\n\\r\\n<p>\\r\\n  To begin making a user's custom map, MMMap utilizes the Spotify API to fetch user's saved tracks. Next, for each artist in a user's library, there is a frequeny value that represents the number of times the artist is represented in the user's library. After using webscraping to extract each artist's birthplace and geocoding the provided birthplace, MMMap creates a heatmap! The MMMap database contains over 84,000 artists provided by Localify, a platform that personalizes local music recommendations by integrating Spotify playlists with tracks from local artists. Each time a new user uses MMMap, the artists they listen to are added to MMMap's  database.\\r\\n</p>\\r\\n\\r\\n<p>\\r\\n  Currently, MMMAP is still in the development phase, meaning that only up to 25 approved users can try out this web application until Spotify approves the user extension request. \\r\\n  <a href=\\"https://mmmapproject.com\\" target=\\"_blank\\">Click here to visit the site!</a> \\r\\n  If you're interested in making a heatmap, \\r\\n  <a href=\\"mailto:crusemarissa3@gmail.com\\">reach out to me</a> \\r\\n  so I can add your email to the list of approved users!\\r\\n</p>"],"names":[],"mappings":"AAME,eAAC,CAAC,eAAE,CACF,KAAK,CAAE,OAAO,CACd,eAAe,CAAE,SACnB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 data-svelte-h="svelte-63oanm">MMMap</h1> <div> ${validate_component(Image, "Image").$$render(
    $$result,
    {
      baseUrl: "/mmmap/",
      className: "image-container",
      alt: "Description of your image"
    },
    {},
    {}
  )}</div> <p data-svelte-h="svelte-1lkhgd">MMMap is a tool that reads every track in your Spotify library, and creates a heatmap based on the birthplace of artists who contributed to the track.</p> <p data-svelte-h="svelte-14h9jvm">To begin making a user&#39;s custom map, MMMap utilizes the Spotify API to fetch user&#39;s saved tracks. Next, for each artist in a user&#39;s library, there is a frequeny value that represents the number of times the artist is represented in the user&#39;s library. After using webscraping to extract each artist&#39;s birthplace and geocoding the provided birthplace, MMMap creates a heatmap! The MMMap database contains over 84,000 artists provided by Localify, a platform that personalizes local music recommendations by integrating Spotify playlists with tracks from local artists. Each time a new user uses MMMap, the artists they listen to are added to MMMap&#39;s  database.</p> <p class="svelte-fx0rzy" data-svelte-h="svelte-jr809c">Currently, MMMAP is still in the development phase, meaning that only up to 25 approved users can try out this web application until Spotify approves the user extension request. 
  <a href="https://mmmapproject.com" target="_blank" class="svelte-fx0rzy">Click here to visit the site!</a> 
  If you&#39;re interested in making a heatmap, 
  <a href="mailto:crusemarissa3@gmail.com" class="svelte-fx0rzy">reach out to me</a> 
  so I can add your email to the list of approved users!</p>`;
});
export {
  Page as default
};
