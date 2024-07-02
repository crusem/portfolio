

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/predictive_modeling/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.B_AcWfuy.js","_app/immutable/chunks/scheduler.BAhLphj5.js","_app/immutable/chunks/index.C1dtmE37.js"];
export const stylesheets = ["_app/immutable/assets/3.CdncdU4U.css"];
export const fonts = [];
