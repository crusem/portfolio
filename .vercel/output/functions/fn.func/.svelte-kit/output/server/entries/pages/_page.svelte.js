import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { I as Image } from "../../chunks/image.js";
const css = {
  code: "section.svelte-1gormjv.svelte-1gormjv{flex-grow:1;flex-direction:row-reverse}@media(min-width: 768px){section.svelte-1gormjv.svelte-1gormjv{display:flex;gap:1rem}}section.svelte-1gormjv div.svelte-1gormjv{display:flex;justify-content:center;flex-direction:column;padding:1rem;overflow:hidden;margin:0 auto;max-width:384px}@media(min-width: 768px){section.svelte-1gormjv div.svelte-1gormjv{width:50%}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n\\timport Image from '/src/components/atoms/image.svelte';\\r\\n<\/script>\\r\\n\\r\\n<section>\\r\\n\\t<div>\\r\\n\\t\\t<Image baseUrl=\\"/avatar/\\" className=\\"circle\\" loading=\\"eager\\" />\\r\\n\\t</div>\\r\\n\\t<div>\\r\\n\\t\\t<h1>Marissa Cruse</h1>\\r\\n\\t\\t<p>\\t\\r\\n\\t\\tI was born and raised in the St. Louis area and moved to Nebraska to study Economics at the University of Nebraska - Lincoln. After graduating, I moved to Philadelphia, PA and went on to graduate with my Master's of Urban Spatial Analytics from the University of Pennsylvania. Through my lived experiences and academic training, I have found a passion for combining the power of lived-experiences and data analytics to amplify the voices of the marginalized.\\r\\n\\t\\t</p>\\r\\n\\t\\t<h2>Interests</h2>\\r\\n\\t\\t<p>\\t\\r\\n\\t\\tData analytics & data viz, spatial analytics, UI Design, community empowerment, equitable cities, and sustainability!\\t\\r\\n\\t\\t</p>\\r\\n\\r\\n\\t\\t<h2>Skills</h2>\\r\\n\\t\\t<p>\\t\\r\\n\\t\\tR, Python, HTML, ArcGISPro, Excel, Django, Github,  JavaScript (Beginner), SQL (Beginner), Tableau (Beginner), Svelte (Beginner), Adobe Illustrator (Beginner), Adobe InDesign (Beginner), Canva\\t\\t\\r\\n\\t\\t</p>\\r\\n\\t</div>\\r\\n</section>\\r\\n\\r\\n<style lang=\\"scss\\" scoped>section {\\n  flex-grow: 1;\\n  flex-direction: row-reverse;\\n}\\n@media (min-width: 768px) {\\n  section {\\n    display: flex;\\n    gap: 1rem;\\n  }\\n}\\nsection div {\\n  display: flex;\\n  justify-content: center;\\n  flex-direction: column;\\n  padding: 1rem;\\n  overflow: hidden;\\n  margin: 0 auto;\\n  max-width: 384px;\\n}\\n@media (min-width: 768px) {\\n  section div {\\n    width: 50%;\\n  }\\n}</style>\\r\\n"],"names":[],"mappings":"AAyB0B,qCAAQ,CAChC,SAAS,CAAE,CAAC,CACZ,cAAc,CAAE,WAClB,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,qCAAQ,CACN,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IACP,CACF,CACA,sBAAO,CAAC,kBAAI,CACV,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,MAAM,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,SAAS,CAAE,KACb,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,sBAAO,CAAC,kBAAI,CACV,KAAK,CAAE,GACT,CACF"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-1gormjv"><div class="svelte-1gormjv">${validate_component(Image, "Image").$$render(
    $$result,
    {
      baseUrl: "/avatar/",
      className: "circle",
      loading: "eager"
    },
    {},
    {}
  )}</div> <div class="svelte-1gormjv" data-svelte-h="svelte-1g0c0ae"><h1>Marissa Cruse</h1> <p>I was born and raised in the St. Louis area and moved to Nebraska to study Economics at the University of Nebraska - Lincoln. After graduating, I moved to Philadelphia, PA and went on to graduate with my Master&#39;s of Urban Spatial Analytics from the University of Pennsylvania. Through my lived experiences and academic training, I have found a passion for combining the power of lived-experiences and data analytics to amplify the voices of the marginalized.</p> <h2>Interests</h2> <p>Data analytics &amp; data viz, spatial analytics, UI Design, community empowerment, equitable cities, and sustainability!</p> <h2>Skills</h2> <p>R, Python, HTML, ArcGISPro, Excel, Django, Github,  JavaScript (Beginner), SQL (Beginner), Tableau (Beginner), Svelte (Beginner), Adobe Illustrator (Beginner), Adobe InDesign (Beginner), Canva</p></div> </section>`;
});
export {
  Page as default
};
