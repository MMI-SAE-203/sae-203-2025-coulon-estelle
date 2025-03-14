import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_tpToOTOX.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Button } from '../chunks/Layout_DOG6wjj8.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_DeDjrfMp.mjs';
import { c as getAllMoviesDate } from '../chunks/ImgPb_7micqpKi.mjs';
import { $ as $$Card } from '../chunks/Card_D-BLW1RQ.mjs';
export { renderers } from '../renderers.mjs';

const Robot = new Proxy({"src":"/_astro/robot.D4Tv8QuQ.png","width":786,"height":926,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/estelle/université/sae-203-2025-coulon-estelle/src/assets/images/header_sci-fistival/robot.png";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const films = await getAllMoviesDate();
  console.log(films);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-green-50"> ${renderComponent($$result2, "Image", $$Image, { "src": Robot, "alt": "chat", "class": "relative w-full lg:w-1/2 lg:ml-96" })} <div class="absolute inset-0 flex flex-col items-center justify-center text-center"> <div class="pb-10"> <h1>SCI-FISTIVAL</h1> <h3>Ce festival n’existe</h3> <h3>pas sans vous</h3> </div> </div> <div> <div class="text-center pt-10 pb-10"> <h2>Programme Films</h2> </div> <div class="text-center pb-10 text-teal-700"> <h2>Samedi 14 mars</h2> </div> <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8"> ${films.length > 0 ? films.map((film) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { ...film })}`) : renderTemplate`<p>Aucun film trouvé.</p>`} </div> <div class="text-center pb-10 text-teal-700 flex-auto"> <h4>Pour savoir le programe au bout des doigts, téléchargez son PDF !</h4> <div class="pt-10"> ${renderComponent($$result2, "Button", $$Button, { "variant": "default", "url": "/", "text": "Programme PDF" })} </div> </div> </div> </div>` })}`;
}, "C:/estelle/universit\xE9/sae-203-2025-coulon-estelle/src/pages/Programmefilms/index.astro", void 0);

const $$file = "C:/estelle/université/sae-203-2025-coulon-estelle/src/pages/Programmefilms/index.astro";
const $$url = "/Programmefilms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
