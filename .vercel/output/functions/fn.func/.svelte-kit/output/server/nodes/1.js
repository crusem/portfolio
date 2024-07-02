

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.D6BY3YbO.js","_app/immutable/chunks/scheduler.BAhLphj5.js","_app/immutable/chunks/index.C1dtmE37.js","_app/immutable/chunks/entry.5Pw1xDRM.js"];
export const stylesheets = [];
export const fonts = [];
