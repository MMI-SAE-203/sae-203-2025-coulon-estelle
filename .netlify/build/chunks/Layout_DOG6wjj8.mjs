import { c as createComponent, u as unescapeHTML, s as spreadAttributes, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute, j as renderSlot, r as renderComponent, k as renderScript, l as renderHead } from './astro/server_tpToOTOX.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const countersByPage = /* @__PURE__ */ new WeakMap();
function createSvgComponent({ meta, attributes, children }) {
  const renderedIds = /* @__PURE__ */ new WeakMap();
  const Component = createComponent((result, props) => {
    let counter = countersByPage.get(result) ?? 0;
    const {
      title: titleProp,
      viewBox,
      mode,
      ...normalizedProps
    } = normalizeProps(attributes, props);
    const title = titleProp ? unescapeHTML(`<title>${titleProp}</title>`) : "";
    if (mode === "sprite") {
      let symbol = "";
      let id = renderedIds.get(result);
      if (!id) {
        countersByPage.set(result, ++counter);
        id = `a:${counter}`;
        symbol = unescapeHTML(`<symbol${spreadAttributes({ viewBox, id })}>${children}</symbol>`);
        renderedIds.set(result, id);
      }
      return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${title}${symbol}<use href="#${id}" /></svg>`;
    }
    return renderTemplate`<svg${spreadAttributes({ viewBox, ...normalizedProps })}>${title}${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = { role: "img" };
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, { size, ...props }) {
  if (size !== void 0 && props.width === void 0 && props.height === void 0) {
    props.height = size;
    props.width = size;
  }
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const Logo = createSvgComponent({"meta":{"src":"/_astro/logo_sci-fi.6JFhtrka.svg","width":54,"height":55,"format":"svg"},"attributes":{"mode":"inline","width":"54px","height":"55px","style":"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"},"children":"\n<g><path style=\"opacity:0.965\" fill=\"#f8f9fa\" d=\"M 19.5,-0.5 C 24.1667,-0.5 28.8333,-0.5 33.5,-0.5C 43.1925,3.19244 49.8591,9.85911 53.5,19.5C 53.5,24.1667 53.5,28.8333 53.5,33.5C 51.5294,33.1362 49.5294,32.8028 47.5,32.5C 45.5484,33.8136 43.715,34.4803 42,34.5C 41.2828,33.9558 40.7828,33.2891 40.5,32.5C 42.3687,28.2076 41.7021,27.2076 38.5,29.5C 38.5,29.1667 38.5,28.8333 38.5,28.5C 40.5,26.1667 42.5,23.8333 44.5,21.5C 46.2927,19.5739 47.2927,17.2406 47.5,14.5C 43.1018,14.2941 38.7685,14.6274 34.5,15.5C 33.8333,15.5 33.5,15.1667 33.5,14.5C 34.7383,14.19 34.7383,13.69 33.5,13C 23.533,9.65071 16.533,12.8174 12.5,22.5C 11.7321,23.2625 11.2321,24.2625 11,25.5C 7.95139,21.9574 5.11806,18.2907 2.5,14.5C 6.01521,6.98042 11.6819,1.98042 19.5,-0.5 Z\" /></g>\n<g><path style=\"opacity:1\" fill=\"#607d87\" d=\"M 33.5,14.5 C 27.9822,12.4378 22.9822,13.2712 18.5,17C 16.7888,19.5888 14.9555,22.0888 13,24.5C 12.5357,23.9056 12.369,23.2389 12.5,22.5C 16.533,12.8174 23.533,9.65071 33.5,13C 34.7383,13.69 34.7383,14.19 33.5,14.5 Z\" /></g>\n<g><path style=\"opacity:1\" fill=\"#4a6670\" d=\"M 44.5,21.5 C 44.5,20.8333 44.1667,20.5 43.5,20.5C 44.2341,19.2921 44.5674,17.9587 44.5,16.5C 43.1667,16.5 41.8333,16.5 40.5,16.5C 40.5,17.5 40.5,18.5 40.5,19.5C 39.8333,19.8333 39.1667,20.1667 38.5,20.5C 38.5299,19.5028 38.0299,18.8361 37,18.5C 25.6069,24.3686 24.7736,23.3686 34.5,15.5C 38.7685,14.6274 43.1018,14.2941 47.5,14.5C 47.2927,17.2406 46.2927,19.5739 44.5,21.5 Z\" /></g>\n<g><path style=\"opacity:1\" fill=\"#eceff1\" d=\"M 43.5,20.5 C 42.209,20.7373 41.209,20.404 40.5,19.5C 40.5,18.5 40.5,17.5 40.5,16.5C 41.8333,16.5 43.1667,16.5 44.5,16.5C 44.5674,17.9587 44.2341,19.2921 43.5,20.5 Z\" /></g>\n<g><path style=\"opacity:1\" fill=\"#2d4853\" d=\"M 40.5,19.5 C 41.209,20.404 42.209,20.7373 43.5,20.5C 44.1667,20.5 44.5,20.8333 44.5,21.5C 42.5,23.8333 40.5,26.1667 38.5,28.5C 36.8333,29.1667 35.1667,29.8333 33.5,30.5C 34.4867,28.5266 35.4867,26.5266 36.5,24.5C 36.3764,23.8933 36.0431,23.56 35.5,23.5C 35.5,22.8333 35.5,22.1667 35.5,21.5C 36.391,20.8902 37.391,20.5569 38.5,20.5C 39.1667,20.1667 39.8333,19.8333 40.5,19.5 Z\" /></g>\n<g><path style=\"opacity:0.981\" fill=\"#e8ecee\" d=\"M 33.5,14.5 C 33.5,15.1667 33.8333,15.5 34.5,15.5C 24.7736,23.3686 25.6069,24.3686 37,18.5C 38.0299,18.8361 38.5299,19.5028 38.5,20.5C 37.391,20.5569 36.391,20.8902 35.5,21.5C 26.0602,25.0542 17.0602,29.3875 8.5,34.5C 17.6145,31.7983 26.6145,28.1316 35.5,23.5C 36.0431,23.56 36.3764,23.8933 36.5,24.5C 35.4867,26.5266 34.4867,28.5266 33.5,30.5C 32.8333,30.5 32.1667,30.5 31.5,30.5C 28.3362,28.8094 26.3362,29.8094 25.5,33.5C 24.8333,33.1667 24.1667,32.8333 23.5,32.5C 23.44,31.9569 23.1067,31.6236 22.5,31.5C 19.9504,32.9416 17.2837,34.1083 14.5,35C 13.244,35.4169 12.5774,36.2502 12.5,37.5C 13.1667,38.1667 13.8333,38.8333 14.5,39.5C 14.5,39.8333 14.5,40.1667 14.5,40.5C 9.19426,41.2048 4.52759,39.5381 0.5,35.5C 0.5,34.8333 0.166667,34.5 -0.5,34.5C -0.5,29.5 -0.5,24.5 -0.5,19.5C 0.312714,17.7392 1.31271,16.0725 2.5,14.5C 5.11806,18.2907 7.95139,21.9574 11,25.5C 11.2321,24.2625 11.7321,23.2625 12.5,22.5C 12.369,23.2389 12.5357,23.9056 13,24.5C 14.9555,22.0888 16.7888,19.5888 18.5,17C 22.9822,13.2712 27.9822,12.4378 33.5,14.5 Z\" /></g>\n<g><path style=\"opacity:1\" fill=\"#506d77\" d=\"M 19.5,23.5 C 20.8734,23.3433 22.2068,23.51 23.5,24C 18.2091,26.8943 12.7091,29.3943 7,31.5C 6.5,31.1667 6,30.8333 5.5,30.5C 10.2274,28.1363 14.8941,25.8029 19.5,23.5 Z\" /></g>\n<g><path style=\"opacity:1\" fill=\"#43616a\" d=\"M 18.5,19.5 C 19.675,19.281 20.675,19.6143 21.5,20.5C 19.9483,21.7979 18.9483,21.4646 18.5,19.5 Z\" /></g>\n<g><path style=\"opacity:1\" fill=\"#3c5a63\" d=\"M 24.5,15.5 C 26.9118,15.6941 27.9118,17.0274 27.5,19.5C 26.1667,19.5 24.8333,19.5 23.5,19.5C 23.4326,18.0413 23.7659,16.7079 24.5,15.5 Z\" /></g>\n<g><path style=\"opacity:1\" fill=\"#48646e\" d=\"M 35.5,21.5 C 35.5,22.1667 35.5,22.8333 35.5,23.5C 26.6145,28.1316 17.6145,31.7983 8.5,34.5C 17.0602,29.3875 26.0602,25.0542 35.5,21.5 Z\" /></g>\n<g><path style=\"opacity:1\" fill=\"#37515b\" d=\"M 31.5,30.5 C 33.0685,35.0819 31.4019,36.5819 26.5,35C 25.944,34.6174 25.6107,34.1174 25.5,33.5C 26.3362,29.8094 28.3362,28.8094 31.5,30.5 Z\" /></g>\n<g><path style=\"opacity:1\" fill=\"#405a63\" d=\"M 23.5,32.5 C 20.3552,35.1128 16.6886,36.7795 12.5,37.5C 12.5774,36.2502 13.244,35.4169 14.5,35C 17.2837,34.1083 19.9504,32.9416 22.5,31.5C 23.1067,31.6236 23.44,31.9569 23.5,32.5 Z\" /></g>\n<g><path style=\"opacity:0.98\" fill=\"#e3e7e9\" d=\"M 0.5,35.5 C 4.52759,39.5381 9.19426,41.2048 14.5,40.5C 15.6316,41.3543 16.965,41.3543 18.5,40.5C 18.3691,41.3764 18.7025,42.0431 19.5,42.5C 21.1667,43.1667 22.8333,43.8333 24.5,44.5C 28.0965,44.1021 31.7632,44.1021 35.5,44.5C 40.5075,43.1637 45.5075,41.8303 50.5,40.5C 46.3032,47.5859 40.3032,52.2525 32.5,54.5C 28.5,54.5 24.5,54.5 20.5,54.5C 10.635,51.6374 3.96831,45.304 0.5,35.5 Z\" /></g>\n<g><path style=\"opacity:1\" fill=\"#39555f\" d=\"M 40.5,32.5 C 37.9533,36.7143 34.2866,39.381 29.5,40.5C 27.901,40.7678 26.5676,40.4345 25.5,39.5C 31.9879,38.7771 36.3212,35.4438 38.5,29.5C 41.7021,27.2076 42.3687,28.2076 40.5,32.5 Z\" /></g>\n<g><path style=\"opacity:1\" fill=\"#334e56\" d=\"M 18.5,40.5 C 16.965,41.3543 15.6316,41.3543 14.5,40.5C 14.5,40.1667 14.5,39.8333 14.5,39.5C 17.1505,38.5103 19.8172,37.5103 22.5,36.5C 23.1667,36.6667 23.8333,36.8333 24.5,37C 22.6365,38.4307 20.6365,39.5974 18.5,40.5 Z\" /></g>\n<g><path style=\"opacity:0.998\" fill=\"#e4e9eb\" d=\"M 38.5,28.5 C 38.5,28.8333 38.5,29.1667 38.5,29.5C 36.3212,35.4438 31.9879,38.7771 25.5,39.5C 24.7109,39.7828 24.0442,40.2828 23.5,41C 25.7116,41.7891 27.7116,41.6225 29.5,40.5C 34.2866,39.381 37.9533,36.7143 40.5,32.5C 40.7828,33.2891 41.2828,33.9558 42,34.5C 43.715,34.4803 45.5484,33.8136 47.5,32.5C 49.5294,32.8028 51.5294,33.1362 53.5,33.5C 53.5,33.8333 53.5,34.1667 53.5,34.5C 52.5139,36.4261 51.5139,38.4261 50.5,40.5C 45.5075,41.8303 40.5075,43.1637 35.5,44.5C 31.7632,44.1021 28.0965,44.1021 24.5,44.5C 22.8333,43.8333 21.1667,43.1667 19.5,42.5C 18.7025,42.0431 18.3691,41.3764 18.5,40.5C 20.6365,39.5974 22.6365,38.4307 24.5,37C 23.8333,36.8333 23.1667,36.6667 22.5,36.5C 19.8172,37.5103 17.1505,38.5103 14.5,39.5C 13.8333,38.8333 13.1667,38.1667 12.5,37.5C 16.6886,36.7795 20.3552,35.1128 23.5,32.5C 24.1667,32.8333 24.8333,33.1667 25.5,33.5C 25.6107,34.1174 25.944,34.6174 26.5,35C 31.4019,36.5819 33.0685,35.0819 31.5,30.5C 32.1667,30.5 32.8333,30.5 33.5,30.5C 35.1667,29.8333 36.8333,29.1667 38.5,28.5 Z\" /></g>\n<g><path style=\"opacity:1\" fill=\"#75868d\" d=\"M 25.5,39.5 C 26.5676,40.4345 27.901,40.7678 29.5,40.5C 27.7116,41.6225 25.7116,41.7891 23.5,41C 24.0442,40.2828 24.7109,39.7828 25.5,39.5 Z\" /></g>\n"});

const $$Astro$2 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "default",
    size = "medium",
    url = "#",
    text = ""
  } = Astro2.props;
  const variantClass = {
    default: "border-red-800 bg-red-800 text-white rounded-full"
  };
  const sizeClass = {
    small: "px-4 py-2.5 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-base"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}${addAttribute(`inline-flex items-center gap-2 text-indigo-500 border-2 font-bold rounded-lg transition duration-300 ease-in-out ${variantClass[variant]} ${sizeClass[size]}`, "class")}> ${renderSlot($$result, $$slots["default"])} ${text} </a>`;
}, "C:/estelle/universit\xE9/sae-203-2025-coulon-estelle/src/components/Button.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="flex items-center justify-between px-4 gap-8 border-b-2 border-b-indigo-100 h-20 bg-teal-900 text-green-50"> <a href="/"> ${renderComponent($$result, "Logo", Logo, {})} </a> <h4 class="textcenter">SCI-FISTIVAL</h4> <button id="menu-btn" class="group relative z-10 flex h-3 w-6 flex-col justify-between lg:hidden *:block *:ease *:h-0.5 *:w-full *:transform *:rounded-full *:bg-white *:transition *:duration-300" aria-label="Menu" aria-controls="menu" aria-expanded="false"> <span class="group-aria-expanded:translate-y-[5px] group-aria-expanded:rotate-45"></span> <span class="group-aria-expanded:-translate-y-[5px] group-aria-expanded:-rotate-45"></span> </button> <nav id="menu" class="flex-1 px-6 py-12 flex justify-between mt-20 flex-col fixed z-10 inset-0 bg-black visible opacity-100 max-lg:aria-hidden:invisible max-lg:aria-hidden:opacity-0 lg:mt-0 lg:flex-row lg:static lg:bg-transparent lg:py-6 lg:visible lg:opacity-100" aria-hidden="true"> <ul class="text-center gap-4 lg:flex-row"> <li> <a class="block p-4 rounded-lg text-emerald-300" href="/Programmefilms"><h3>Programme films</h3></a> </li> <li> <hr class="border-t border-emerald-300 my-2"> </li> <li> <a class="block p-4 rounded-lg text-emerald-300" href="/Programmeactivites"><h3>Programme activités</h3></a> </li> <li> <hr class="border-t border-emerald-300 my-2"> </li> <li> <a class="block p-4 rounded-lg text-emerald-300" href="/Invites"><h3>Invités</h3></a> </li> <li> <hr class="border-t border-emerald-300 my-2"> </li> <li> <a class="block p-4 rounded-lg text-emerald-300" href="/Infos_pratiques"><h3>Infos pratiques</h3></a> </li> </ul> <div class="flex items-center justify-center gap-4 px-4"> ${renderComponent($$result, "Button", $$Button, { "variant": "default", "url": "/Billetterie", "text": "Billetterie" })} </div> </nav> </header> ${renderScript($$result, "C:/estelle/universit\xE9/sae-203-2025-coulon-estelle/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/estelle/universit\xE9/sae-203-2025-coulon-estelle/src/components/Header.astro", void 0);

const Facebook = createSvgComponent({"meta":{"src":"/_astro/facebook.BXn75Yqw.svg","width":26,"height":25,"format":"svg"},"attributes":{"mode":"inline","width":"26px","height":"25px","style":"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"},"children":"\n<g><path style=\"opacity:0.984\" fill=\"#fdf8c1\" d=\"M 7.5,-0.5 C 10.8333,-0.5 14.1667,-0.5 17.5,-0.5C 20.7843,1.11698 23.4509,3.45031 25.5,6.5C 25.5,9.83333 25.5,13.1667 25.5,16.5C 23.034,20.3043 19.7007,22.971 15.5,24.5C 15.1667,24.5 14.8333,24.5 14.5,24.5C 14.5,21.1667 14.5,17.8333 14.5,14.5C 18.5,13.8333 18.5,13.1667 14.5,12.5C 14.5,10.8333 14.5,9.16667 14.5,7.5C 15.5,7.5 16.5,7.5 17.5,7.5C 17.5,6.5 17.5,5.5 17.5,4.5C 12.42,4.6202 10.0867,7.28687 10.5,12.5C 6.5,13.1667 6.5,13.8333 10.5,14.5C 10.5,17.8333 10.5,21.1667 10.5,24.5C 10.1667,24.5 9.83333,24.5 9.5,24.5C 5.29934,22.971 1.966,20.3043 -0.5,16.5C -0.5,13.1667 -0.5,9.83333 -0.5,6.5C 1.54906,3.45031 4.21573,1.11698 7.5,-0.5 Z\" /></g>\n"});

const Instagram = createSvgComponent({"meta":{"src":"/_astro/instagram.DnvfL6j5.svg","width":26,"height":25,"format":"svg"},"attributes":{"mode":"inline","width":"26px","height":"25px","style":"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"},"children":"\n<g><path style=\"opacity:0.888\" fill=\"#fdf8c1\" d=\"M 2.5,-0.5 C 8.83333,-0.5 15.1667,-0.5 21.5,-0.5C 22.795,0.488369 24.1283,1.48837 25.5,2.5C 25.5,8.5 25.5,14.5 25.5,20.5C 23.8089,21.8637 22.1423,23.197 20.5,24.5C 15.1667,24.5 9.83333,24.5 4.5,24.5C 2.85774,23.197 1.19107,21.8637 -0.5,20.5C -0.5,14.5 -0.5,8.5 -0.5,2.5C 0.833333,1.83333 1.83333,0.833333 2.5,-0.5 Z M 17.5,6.5 C 8.55639,3.45709 4.88973,6.45709 6.5,15.5C 9.74045,18.8169 13.4071,19.3169 17.5,17C 19.6407,13.9973 19.9741,10.8307 18.5,7.5C 20.4109,7.4257 21.5776,6.4257 22,4.5C 22.8037,9.75132 22.637,14.918 21.5,20C 5.5563,26.1344 -0.610363,20.9678 3,4.5C 3.5,4 4,3.5 4.5,3C 10.9198,2.15619 15.2531,2.32286 17.5,3.5C 17.5,4.5 17.5,5.5 17.5,6.5 Z M 10.5,8.5 C 14.509,8.01365 16.3423,9.68031 16,13.5C 12.7224,16.514 10.2224,16.014 8.5,12C 8.9783,10.6974 9.64497,9.53069 10.5,8.5 Z\" /></g>\n<g><path style=\"opacity:0.927\" fill=\"#fef9c1\" d=\"M 17.5,6.5 C 17.5,7.16667 17.8333,7.5 18.5,7.5C 19.9741,10.8307 19.6407,13.9973 17.5,17C 13.4071,19.3169 9.74045,18.8169 6.5,15.5C 4.88973,6.45709 8.55639,3.45709 17.5,6.5 Z M 10.5,8.5 C 9.64497,9.53069 8.9783,10.6974 8.5,12C 10.2224,16.014 12.7224,16.514 16,13.5C 16.3423,9.68031 14.509,8.01365 10.5,8.5 Z\" /></g>\n"});

const Twitter = createSvgComponent({"meta":{"src":"/_astro/twitter.DMRsjRQW.svg","width":26,"height":23,"format":"svg"},"attributes":{"mode":"inline","width":"26px","height":"23px","style":"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"},"children":"\n<g><path style=\"opacity:0.98\" fill=\"#fdf8c1\" d=\"M 14.5,-0.5 C 16.5,-0.5 18.5,-0.5 20.5,-0.5C 21.5,0.833333 22.5,0.833333 23.5,-0.5C 24.1667,-0.5 24.8333,-0.5 25.5,-0.5C 25.5,-0.166667 25.5,0.166667 25.5,0.5C 24.1667,0.833333 24.1667,1.16667 25.5,1.5C 25.5,2.16667 25.5,2.83333 25.5,3.5C 24.8826,3.61071 24.3826,3.94404 24,4.5C 21.9271,19.6153 13.7604,24.6153 -0.5,19.5C -0.5,19.1667 -0.5,18.8333 -0.5,18.5C 1.7505,18.8186 3.7505,18.3186 5.5,17C 4.58377,16.6258 3.75044,16.1258 3,15.5C 2.78369,13.6161 2.11702,11.9494 1,10.5C 0.176379,7.11771 0.343046,3.78437 1.5,0.5C 3.93793,2.80363 6.77126,4.47029 10,5.5C 11.743,3.68 13.243,1.68 14.5,-0.5 Z\" /></g>\n"});

const Youtube = createSvgComponent({"meta":{"src":"/_astro/youtube.GhfPjzdI.svg","width":29,"height":20,"format":"svg"},"attributes":{"mode":"inline","width":"29px","height":"20px","style":"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"},"children":"\n<g><path style=\"opacity:0.989\" fill=\"#fdf8c1\" d=\"M 1.5,-0.5 C 9.83333,-0.5 18.1667,-0.5 26.5,-0.5C 26.8333,0.5 27.5,1.16667 28.5,1.5C 28.5,6.5 28.5,11.5 28.5,16.5C 27.2597,17.6588 25.9264,18.6588 24.5,19.5C 17.8333,19.5 11.1667,19.5 4.5,19.5C 2.97237,18.6908 1.3057,18.0241 -0.5,17.5C -0.5,12.1667 -0.5,6.83333 -0.5,1.5C 0.5,1.16667 1.16667,0.5 1.5,-0.5 Z M 11.5,6.5 C 13.5932,7.04469 15.5932,7.87803 17.5,9C 15.7513,10.2915 13.918,11.4582 12,12.5C 11.5045,10.5273 11.3379,8.5273 11.5,6.5 Z\" /></g>\n"});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="container space-y-5 pt-10 lg:grid lg:grid-cols-4 lg:gap-5 lg:space-y-0 bg-red-800"> ${renderComponent($$result, "Logo", Logo, {})} <nav class="gap-8 space-y-8 text-sm lg:text-base lg:columns-4 lg:col-span-3 lg:px-0 *:break-inside-avoid *:space-y-3 bg-red-800"> <div> <ul class="text-orange-200"> <li class="pb-10"><a href="/contact"><h4>Contact</h4></a></li> <li class="pb-10"><a href="/à_propos"><h4>À Propos</h4></a></li> </ul> </div> <div> <ul class="text-orange-200"> <li>Estelle Coulon</li> <li>Département MMI</li> <li>4, place Lucien Tharradin, </li> <li>25200 Montbéliard</li> </ul> </div> </nav> <ul class="flex gap-12 justify-center bg-red-800 pb-12 pt-12"> <li> <a href="https://facebook.com" aria-label="Facebook">${renderComponent($$result, "Facebook", Facebook, {})}</a> </li> <li> <a href="https://instagram.com" aria-label="Instagram">${renderComponent($$result, "Instagram", Instagram, {})}</a> </li> <li> <a href="https://twitter.com" aria-label="Twitter">${renderComponent($$result, "Twitter", Twitter, {})}</a> </li> <li> <a href="https://linkedin.com" aria-label="Youtube">${renderComponent($$result, "Youtube", Youtube, {})}</a> </li> </ul> </footer>`;
}, "C:/estelle/universit\xE9/sae-203-2025-coulon-estelle/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon-16x16.png"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title ? `${title} \u2014 Sci-fistival` : "Sci-fistival"}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="bg-green-50"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/estelle/universit\xE9/sae-203-2025-coulon-estelle/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Button as a };
