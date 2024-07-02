import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../chunks/ssr.js";
const css$4 = {
  code: "nav.svelte-1g9cxsx.svelte-1g9cxsx{height:100%}nav.svelte-1g9cxsx ul.svelte-1g9cxsx{display:flex;flex-direction:row;height:inherit}nav.svelte-1g9cxsx ul li.svelte-1g9cxsx{display:inherit;align-items:center}nav.svelte-1g9cxsx ul li a.svelte-1g9cxsx{display:flex;flex-direction:column;justify-content:center;padding:0 1rem;height:100%;width:100%;color:inherit;text-transform:uppercase;text-decoration:none;text-align:center}nav.svelte-1g9cxsx ul li a.svelte-1g9cxsx:hover,nav.svelte-1g9cxsx ul li a.svelte-1g9cxsx:focus{background-color:#fff;color:#0B0B0B}",
  map: '{"version":3,"file":"navigation.svelte","sources":["navigation.svelte"],"sourcesContent":["<nav>\\r\\n\\t<ul>\\r\\n\\t\\t<li>\\r\\n\\t\\t\\t<a href=\\"/\\">Home</a>\\r\\n\\t\\t</li>\\r\\n\\t\\t<li>\\r\\n\\t\\t\\t<a href=\\"/MMMAP\\">MMMAP</a>\\r\\n\\t\\t</li>\\r\\n\\t\\t<li>\\r\\n\\t\\t\\t<a href=\\"/predictive_modeling\\">Predictive Modeling</a>\\r\\n\\t\\t</li>\\r\\n\\t\\t<li>\\r\\n\\t\\t\\t<a href=\\"/data_analytics\\">More Data Analytics</a>\\r\\n\\t\\t</li>\\r\\n\\t</ul>\\r\\n</nav>\\r\\n\\r\\n<style lang=\\"scss\\">nav {\\n  height: 100%;\\n}\\nnav ul {\\n  display: flex;\\n  flex-direction: row;\\n  height: inherit;\\n}\\nnav ul li {\\n  display: inherit;\\n  align-items: center;\\n}\\nnav ul li a {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  padding: 0 1rem;\\n  height: 100%;\\n  width: 100%;\\n  color: inherit;\\n  text-transform: uppercase;\\n  text-decoration: none;\\n  text-align: center;\\n}\\nnav ul li a:hover, nav ul li a:focus {\\n  background-color: #fff;\\n  color: #0B0B0B;\\n}</style>\\r\\n"],"names":[],"mappings":"AAiBmB,iCAAI,CACrB,MAAM,CAAE,IACV,CACA,kBAAG,CAAC,iBAAG,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,MAAM,CAAE,OACV,CACA,kBAAG,CAAC,EAAE,CAAC,iBAAG,CACR,OAAO,CAAE,OAAO,CAChB,WAAW,CAAE,MACf,CACA,kBAAG,CAAC,EAAE,CAAC,EAAE,CAAC,gBAAE,CACV,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,KAAK,CAAE,OAAO,CACd,cAAc,CAAE,SAAS,CACzB,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,MACd,CACA,kBAAG,CAAC,EAAE,CAAC,EAAE,CAAC,gBAAC,MAAM,CAAE,kBAAG,CAAC,EAAE,CAAC,EAAE,CAAC,gBAAC,MAAO,CACnC,gBAAgB,CAAE,IAAI,CACtB,KAAK,CAAE,OACT"}'
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<nav class="svelte-1g9cxsx" data-svelte-h="svelte-914ph9"><ul class="svelte-1g9cxsx"><li class="svelte-1g9cxsx"><a href="/" class="svelte-1g9cxsx">Home</a></li> <li class="svelte-1g9cxsx"><a href="/MMMAP" class="svelte-1g9cxsx">MMMAP</a></li> <li class="svelte-1g9cxsx"><a href="/predictive_modeling" class="svelte-1g9cxsx">Predictive Modeling</a></li> <li class="svelte-1g9cxsx"><a href="/data_analytics" class="svelte-1g9cxsx">More Data Analytics</a></li></ul> </nav>`;
});
const css$3 = {
  code: "header.svelte-k7cg9y{position:sticky;top:0;background-color:#0B0B0B;margin-bottom:0.5rem;padding:0.5rem;height:3rem;width:calc(100% - 2 * 0.5rem)}",
  map: `{"version":3,"file":"header.svelte","sources":["header.svelte"],"sourcesContent":["<script>\\r\\n\\timport Navigation from '../molecules/navigation.svelte';\\r\\n<\/script>\\r\\n\\r\\n<header>\\r\\n\\t<Navigation />\\r\\n</header>\\r\\n\\r\\n<style lang=\\"scss\\" scoped>header {\\n  position: sticky;\\n  top: 0;\\n  background-color: #0B0B0B;\\n  margin-bottom: 0.5rem;\\n  padding: 0.5rem;\\n  height: 3rem;\\n  width: calc(100% - 2 * 0.5rem);\\n}</style>\\r\\n"],"names":[],"mappings":"AAQ0B,oBAAO,CAC/B,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,CAAC,CACN,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,MAAM,CACrB,OAAO,CAAE,MAAM,CACf,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,MAAM,CAC/B"}`
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<header class="svelte-k7cg9y">${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} </header>`;
});
const css$2 = {
  code: "a.svelte-1c0m58p img.svelte-1c0m58p{height:2rem;width:2rem}a.svelte-1c0m58p img.svelte-1c0m58p:hover,a.svelte-1c0m58p img.svelte-1c0m58p:focus{filter:brightness(0)}",
  map: '{"version":3,"file":"graphicLink.svelte","sources":["graphicLink.svelte"],"sourcesContent":["<script>\\r\\n\\t// @ts-nocheck\\r\\n\\texport let url;\\r\\n\\texport let src;\\r\\n\\texport let alt;\\r\\n<\/script>\\r\\n\\r\\n<a href={url} target=\\"_blank\\" rel=\\"noreferrer\\">\\r\\n\\t<img {src} {alt} />\\r\\n</a>\\r\\n\\r\\n<style lang=\\"scss\\">a img {\\n  height: 2rem;\\n  width: 2rem;\\n}\\na img:hover, a img:focus {\\n  filter: brightness(0);\\n}</style>\\r\\n"],"names":[],"mappings":"AAWmB,gBAAC,CAAC,kBAAI,CACvB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IACT,CACA,gBAAC,CAAC,kBAAG,MAAM,CAAE,gBAAC,CAAC,kBAAG,MAAO,CACvB,MAAM,CAAE,WAAW,CAAC,CACtB"}'
};
const GraphicLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  let { src } = $$props;
  let { alt } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
  $$result.css.add(css$2);
  return `<a${add_attribute("href", url, 0)} target="_blank" rel="noreferrer" class="svelte-1c0m58p"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} class="svelte-1c0m58p"> </a>`;
});
const css$1 = {
  code: "footer.svelte-1cjwvwz.svelte-1cjwvwz{position:fixed;bottom:0;background-color:#0B0B0B;display:flex;flex-direction:row;justify-content:flex-end;margin-top:0.5rem;padding:0.5rem;height:3rem;width:calc(100% - 2 * 0.5rem)}footer.svelte-1cjwvwz ul.svelte-1cjwvwz{display:inherit;gap:1rem}footer.svelte-1cjwvwz ul li.svelte-1cjwvwz{display:inherit;flex-grow:inherit;align-items:center}",
  map: `{"version":3,"file":"footer.svelte","sources":["footer.svelte"],"sourcesContent":["<script>\\r\\n\\timport GraphicLink from '../atoms/graphicLink.svelte';\\r\\n<\/script>\\r\\n\\r\\n<footer>\\r\\n\\t<ul>\\r\\n\\t\\t<li>\\r\\n\\t\\t\\t<GraphicLink src=\\"/github.svg\\" url=\\"https://www.github.com\\" alt=\\"github\\" />\\r\\n\\t\\t</li>\\r\\n\\t</ul>\\r\\n</footer>\\r\\n\\r\\n<style lang=\\"scss\\" scoped>footer {\\n  position: fixed;\\n  bottom: 0;\\n  background-color: #0B0B0B;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-end;\\n  margin-top: 0.5rem;\\n  padding: 0.5rem;\\n  height: 3rem;\\n  width: calc(100% - 2 * 0.5rem);\\n}\\nfooter ul {\\n  display: inherit;\\n  gap: 1rem;\\n}\\nfooter ul li {\\n  display: inherit;\\n  flex-grow: inherit;\\n  align-items: center;\\n}</style>"],"names":[],"mappings":"AAY0B,oCAAO,CAC/B,QAAQ,CAAE,KAAK,CACf,MAAM,CAAE,CAAC,CACT,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,QAAQ,CACzB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,MAAM,CACf,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,MAAM,CAC/B,CACA,qBAAM,CAAC,iBAAG,CACR,OAAO,CAAE,OAAO,CAChB,GAAG,CAAE,IACP,CACA,qBAAM,CAAC,EAAE,CAAC,iBAAG,CACX,OAAO,CAAE,OAAO,CAChB,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,MACf"}`
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="svelte-1cjwvwz"><ul class="svelte-1cjwvwz"><li class="svelte-1cjwvwz">${validate_component(GraphicLink, "GraphicLink").$$render(
    $$result,
    {
      src: "/github.svg",
      url: "https://www.github.com",
      alt: "github"
    },
    {},
    {}
  )}</li></ul> </footer>`;
});
const css = {
  code: "*{margin:0;border:0;padding:0}body{background-color:#0B0B0B;color:#fff;font-family:sans-serif;font-size:1rem}main{display:flex;flex-direction:column;flex-grow:1;margin:0 auto calc(3rem + 0.5rem + 0.5rem + 1px);padding:2rem;min-height:calc(\n			100vh - 2 * 3rem - 2 * 0.5rem - 2 * 0.5rem -\n				2 * 2rem\n		);width:100%;max-width:calc(100vw - 3rem);overflow-x:hidden}@media(min-width: 768px){main{max-width:calc(768px - 3rem)}}h1{width:fit-content;font-size:2rem;text-transform:uppercase;padding:1em 0 0.5em;color:#fff}h2{width:fit-content;font-size:1.5rem;padding:1em 0 0.5em}h3{width:fit-content;font-size:1.25rem;padding:1em 0 0.5em}h1 + p,h2 + p,h3 + p{padding-top:0}p{font-family:serif;padding:1em 0 0.5em}.mark{font-weight:800}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\r\\n\\timport Header from '../components/organisms/header.svelte';\\r\\n\\timport Footer from '../components/organisms/footer.svelte';\\r\\n<\/script>\\r\\n\\r\\n<Header />\\r\\n<main>\\r\\n\\t<slot />\\r\\n</main>\\r\\n<Footer />\\r\\n\\r\\n<style lang=\\"scss\\">:global(*) {\\n  margin: 0;\\n  border: 0;\\n  padding: 0;\\n}\\n\\n:global(body) {\\n  background-color: #0B0B0B;\\n  color: #fff;\\n  font-family: sans-serif;\\n  font-size: 1rem;\\n}\\n\\n:global(main) {\\n  display: flex;\\n  flex-direction: column;\\n  flex-grow: 1;\\n  margin: 0 auto calc(3rem + 0.5rem + 0.5rem + 1px);\\n  padding: 2rem;\\n  min-height: calc(\\n\\t\\t\\t100vh - 2 * 3rem - 2 * 0.5rem - 2 * 0.5rem -\\n\\t\\t\\t\\t2 * 2rem\\n\\t\\t);\\n  width: 100%;\\n  max-width: calc(100vw - 3rem);\\n  overflow-x: hidden;\\n}\\n@media (min-width: 768px) {\\n  :global(main) {\\n    max-width: calc(768px - 3rem);\\n  }\\n}\\n\\n:global(h1) {\\n  width: fit-content;\\n  font-size: 2rem;\\n  text-transform: uppercase;\\n  padding: 1em 0 0.5em;\\n  color: #fff;\\n}\\n\\n:global(h2) {\\n  width: fit-content;\\n  font-size: 1.5rem;\\n  padding: 1em 0 0.5em;\\n}\\n\\n:global(h3) {\\n  width: fit-content;\\n  font-size: 1.25rem;\\n  padding: 1em 0 0.5em;\\n}\\n\\n:global(h1 + p),\\n:global(h2 + p),\\n:global(h3 + p) {\\n  padding-top: 0;\\n}\\n\\n:global(p) {\\n  font-family: serif;\\n  padding: 1em 0 0.5em;\\n}\\n\\n:global(.mark) {\\n  font-weight: 800;\\n}</style>"],"names":[],"mappings":"AAW2B,CAAG,CAC5B,MAAM,CAAE,CAAC,CACT,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CACX,CAEQ,IAAM,CACZ,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,UAAU,CACvB,SAAS,CAAE,IACb,CAEQ,IAAM,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,SAAS,CAAE,CAAC,CACZ,MAAM,CAAE,CAAC,CAAC,IAAI,CAAC,KAAK,IAAI,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CAAC,GAAG,CAAC,CACjD,OAAO,CAAE,IAAI,CACb,UAAU,CAAE;AACd,GAAG,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC;AAC/C,IAAI,CAAC,CAAC,CAAC,CAAC,IAAI;AACZ,GAAG,CACD,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAC7B,UAAU,CAAE,MACd,CACA,MAAO,YAAY,KAAK,CAAE,CAChB,IAAM,CACZ,SAAS,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAC9B,CACF,CAEQ,EAAI,CACV,KAAK,CAAE,WAAW,CAClB,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,SAAS,CACzB,OAAO,CAAE,GAAG,CAAC,CAAC,CAAC,KAAK,CACpB,KAAK,CAAE,IACT,CAEQ,EAAI,CACV,KAAK,CAAE,WAAW,CAClB,SAAS,CAAE,MAAM,CACjB,OAAO,CAAE,GAAG,CAAC,CAAC,CAAC,KACjB,CAEQ,EAAI,CACV,KAAK,CAAE,WAAW,CAClB,SAAS,CAAE,OAAO,CAClB,OAAO,CAAE,GAAG,CAAC,CAAC,CAAC,KACjB,CAEQ,MAAO,CACP,MAAO,CACP,MAAQ,CACd,WAAW,CAAE,CACf,CAEQ,CAAG,CACT,WAAW,CAAE,KAAK,CAClB,OAAO,CAAE,GAAG,CAAC,CAAC,CAAC,KACjB,CAEQ,KAAO,CACb,WAAW,CAAE,GACf"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
