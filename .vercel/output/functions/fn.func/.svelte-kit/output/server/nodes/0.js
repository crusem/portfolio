

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.C5ekPnzu.js","_app/immutable/chunks/scheduler.BAhLphj5.js","_app/immutable/chunks/index.C1dtmE37.js"];
export const stylesheets = ["_app/immutable/assets/0.D1sDsJ2l.css"];
export const fonts = [];
