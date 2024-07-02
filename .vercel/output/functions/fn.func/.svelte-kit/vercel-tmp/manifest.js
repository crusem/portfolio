export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["avatar/992w.webp","favicon.png","github.svg","mmmap/992w.webp","robots.txt","sounds/992w.webp"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.Xs7PC4c5.js","app":"_app/immutable/entry/app.CbIdyBeL.js","imports":["_app/immutable/entry/start.Xs7PC4c5.js","_app/immutable/chunks/entry.DBNSQUEX.js","_app/immutable/chunks/scheduler.BAhLphj5.js","_app/immutable/entry/app.CbIdyBeL.js","_app/immutable/chunks/scheduler.BAhLphj5.js","_app/immutable/chunks/index.C1dtmE37.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/MMMAP",
				pattern: /^\/MMMAP\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/data_analytics",
				pattern: /^\/data_analytics\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/predictive_modeling",
				pattern: /^\/predictive_modeling\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
