import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_tpToOTOX.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/estelle/universit%C3%A9/sae-203-2025-coulon-estelle/","cacheDir":"file:///C:/estelle/universit%C3%A9/sae-203-2025-coulon-estelle/node_modules/.astro/","outDir":"file:///C:/estelle/universit%C3%A9/sae-203-2025-coulon-estelle/dist/","srcDir":"file:///C:/estelle/universit%C3%A9/sae-203-2025-coulon-estelle/src/","publicDir":"file:///C:/estelle/universit%C3%A9/sae-203-2025-coulon-estelle/public/","buildClientDir":"file:///C:/estelle/universit%C3%A9/sae-203-2025-coulon-estelle/dist/","buildServerDir":"file:///C:/estelle/universit%C3%A9/sae-203-2025-coulon-estelle/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.q6f8EfuM.css"}],"routeData":{"route":"/à_propos","isIndex":true,"type":"page","pattern":"^\\/à_propos\\/?$","segments":[[{"content":"à_propos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/à_propos/index.astro","pathname":"/à_propos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.q6f8EfuM.css"}],"routeData":{"route":"/contact","isIndex":true,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/index.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.q6f8EfuM.css"}],"routeData":{"route":"/infos_pratiques","isIndex":true,"type":"page","pattern":"^\\/infos_pratiques\\/?$","segments":[[{"content":"infos_pratiques","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/infos_pratiques/index.astro","pathname":"/infos_pratiques","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.q6f8EfuM.css"}],"routeData":{"route":"/invites","isIndex":true,"type":"page","pattern":"^\\/Invites\\/?$","segments":[[{"content":"Invites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Invites/index.astro","pathname":"/Invites","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.q6f8EfuM.css"}],"routeData":{"route":"/programmeactivites","isIndex":true,"type":"page","pattern":"^\\/Programmeactivites\\/?$","segments":[[{"content":"Programmeactivites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Programmeactivites/index.astro","pathname":"/Programmeactivites","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.q6f8EfuM.css"}],"routeData":{"route":"/programmefilms/[id]","isIndex":false,"type":"page","pattern":"^\\/Programmefilms\\/([^/]+?)\\/?$","segments":[[{"content":"Programmefilms","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/Programmefilms/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.q6f8EfuM.css"}],"routeData":{"route":"/programmefilms","isIndex":true,"type":"page","pattern":"^\\/Programmefilms\\/?$","segments":[[{"content":"Programmefilms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Programmefilms/index.astro","pathname":"/Programmefilms","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.q6f8EfuM.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/estelle/université/sae-203-2025-coulon-estelle/src/pages/Invites/index.astro",{"propagation":"none","containsHead":true}],["C:/estelle/université/sae-203-2025-coulon-estelle/src/pages/Programmeactivites/index.astro",{"propagation":"none","containsHead":true}],["C:/estelle/université/sae-203-2025-coulon-estelle/src/pages/Programmefilms/[id].astro",{"propagation":"none","containsHead":true}],["C:/estelle/université/sae-203-2025-coulon-estelle/src/pages/Programmefilms/index.astro",{"propagation":"none","containsHead":true}],["C:/estelle/université/sae-203-2025-coulon-estelle/src/pages/contact/index.astro",{"propagation":"none","containsHead":true}],["C:/estelle/université/sae-203-2025-coulon-estelle/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/estelle/université/sae-203-2025-coulon-estelle/src/pages/infos_pratiques/index.astro",{"propagation":"none","containsHead":true}],["C:/estelle/université/sae-203-2025-coulon-estelle/src/pages/à_propos/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/à_propos/index@_@astro":"pages/à_propos.astro.mjs","\u0000@astro-page:src/pages/contact/index@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/infos_pratiques/index@_@astro":"pages/infos_pratiques.astro.mjs","\u0000@astro-page:src/pages/Invites/index@_@astro":"pages/invites.astro.mjs","\u0000@astro-page:src/pages/Programmeactivites/index@_@astro":"pages/programmeactivites.astro.mjs","\u0000@astro-page:src/pages/Programmefilms/[id]@_@astro":"pages/programmefilms/_id_.astro.mjs","\u0000@astro-page:src/pages/Programmefilms/index@_@astro":"pages/programmefilms.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_B-bh72is.mjs","C:/estelle/université/sae-203-2025-coulon-estelle/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CHDu1MCb.mjs","C:/estelle/université/sae-203-2025-coulon-estelle/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DO4CWw4M.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/estelle/université/sae-203-2025-coulon-estelle/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"#menu-btn\"),o=document.querySelector(\"#menu\"),c=document.body;e&&o&&e.addEventListener(\"click\",()=>{const n=e.ariaExpanded===\"true\",t=!n;e.ariaExpanded=String(t),o.ariaHidden=String(n),c.classList.toggle(\"noscroll\",t)});"]],"assets":["/_astro/fleche_sci-fi.DCq_zidT.png","/_astro/gouvernement.BfsV3eTy.png","/_astro/france_trois.xf5L63-g.png","/_astro/pass_culture.BJvtBKZj.png","/_astro/le_monde.DzEJhbyk.png","/_astro/accueil.lHtqZ89a.png","/_astro/chat.C-CF5jiO.png","/_astro/robot.D4Tv8QuQ.png","/_astro/cyber.rY8nvbSu.png","/_astro/lune.BjgaeKYP.png","/_astro/logo_sci-fi.6JFhtrka.svg","/_astro/instagram.DnvfL6j5.svg","/_astro/facebook.BXn75Yqw.svg","/_astro/youtube.GhfPjzdI.svg","/_astro/twitter.DMRsjRQW.svg","/_astro/index.q6f8EfuM.css","/favicon_sci-fi/android-chrome-192x192.png","/favicon_sci-fi/android-chrome-512x512.png","/favicon_sci-fi/apple-touch-icon.png","/favicon_sci-fi/favicon-16x16.png","/favicon_sci-fi/favicon-32x32.png","/favicon_sci-fi/favicon.ico","/favicon_sci-fi/site.webmanifest"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"M/t1yOzM7S2WvaePR82HaFcy9HXmOPmlojs6ovQnGKY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
