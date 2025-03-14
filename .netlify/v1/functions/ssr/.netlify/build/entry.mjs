import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_B-bh72is.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/à_propos.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/infos_pratiques.astro.mjs');
const _page4 = () => import('./pages/invites.astro.mjs');
const _page5 = () => import('./pages/programmeactivites.astro.mjs');
const _page6 = () => import('./pages/programmefilms/_id_.astro.mjs');
const _page7 = () => import('./pages/programmefilms.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/à_propos/index.astro", _page1],
    ["src/pages/contact/index.astro", _page2],
    ["src/pages/infos_pratiques/index.astro", _page3],
    ["src/pages/Invites/index.astro", _page4],
    ["src/pages/Programmeactivites/index.astro", _page5],
    ["src/pages/Programmefilms/[id].astro", _page6],
    ["src/pages/Programmefilms/index.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "132750a5-2694-4b04-b5d1-fe4f44506eea"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
