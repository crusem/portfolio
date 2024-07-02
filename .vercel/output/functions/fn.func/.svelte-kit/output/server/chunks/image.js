import { c as create_ssr_component, e as escape, b as add_attribute, f as null_to_empty } from "./ssr.js";
const css = {
  code: ".circle.svelte-c4ss4y{width:100%;border-radius:75%}.image-container.svelte-c4ss4y{width:100%;height:100%;display:flex;justify-content:center;align-items:center;overflow:hidden}",
  map: '{"version":3,"file":"image.svelte","sources":["image.svelte"],"sourcesContent":["<script>\\r\\n\\t// @ts-nocheck\\r\\n\\texport let baseUrl;\\r\\n\\texport let alt;\\r\\n\\texport let className;\\r\\n\\texport let loading;\\r\\n<\/script>\\r\\n\\r\\n<img\\r\\n\\tsrc=\\"{baseUrl}original.webp\\"\\r\\n\\tsrcset=\\"\\r\\n    {baseUrl}567w.webp 567w,\\r\\n    {baseUrl}768w.webp 768w,\\r\\n    {baseUrl}992w.webp 992w\\r\\n    \\"\\r\\n\\tsizes=\\"(max-width: 567px) 567w,\\r\\n    (max-width: 768px) 768w,\\r\\n    (max-width: 992px) 992w\\"\\r\\n\\t{alt}\\r\\n\\t{loading}\\r\\n\\tclass={className}\\r\\n/>\\r\\n\\r\\n<style lang=\\"scss\\" scoped>.circle {\\n  width: 100%;\\n  border-radius: 75%;\\n}\\n\\n.image-container {\\n  width: 100%;\\n  height: 100%; /* 100% viewport height */\\n  display: flex;\\n  justify-content: center; /* Center the image horizontally */\\n  align-items: center; /* Center the image vertically */\\n  overflow: hidden; /* Ensure the image does not overflow its container */\\n}</style>\\r\\n"],"names":[],"mappings":"AAuB0B,qBAAQ,CAChC,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GACjB,CAEA,8BAAiB,CACf,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,MACZ"}'
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { baseUrl } = $$props;
  let { alt } = $$props;
  let { className } = $$props;
  let { loading } = $$props;
  if ($$props.baseUrl === void 0 && $$bindings.baseUrl && baseUrl !== void 0) $$bindings.baseUrl(baseUrl);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  $$result.css.add(css);
  return `<img src="${escape(baseUrl, true) + "original.webp"}" srcset="${"\r\n    " + escape(baseUrl, true) + "567w.webp 567w,\r\n    " + escape(baseUrl, true) + "768w.webp 768w,\r\n    " + escape(baseUrl, true) + "992w.webp 992w\r\n    "}" sizes="(max-width: 567px) 567w,
    (max-width: 768px) 768w,
    (max-width: 992px) 992w"${add_attribute("alt", alt, 0)}${add_attribute("loading", loading, 0)} class="${escape(null_to_empty(className), true) + " svelte-c4ss4y"}">`;
});
export {
  Image as I
};
