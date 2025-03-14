import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_tpToOTOX.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Button } from '../chunks/Layout_DOG6wjj8.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_DeDjrfMp.mjs';
export { renderers } from '../renderers.mjs';

const accueil = new Proxy({"src":"/_astro/accueil.lHtqZ89a.png","width":786,"height":916,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/estelle/université/sae-203-2025-coulon-estelle/src/assets/images/header_sci-fistival/accueil.png";
							}
							
							return target[name];
						}
					});

const fleche_sci_fi = new Proxy({"src":"/_astro/fleche_sci-fi.DCq_zidT.png","width":39,"height":16,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/estelle/université/sae-203-2025-coulon-estelle/src/assets/icon_sci-fi/fleche_sci-fi.png";
							}
							
							return target[name];
						}
					});

const france_trois = new Proxy({"src":"/_astro/france_trois.xf5L63-g.png","width":262,"height":112,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/estelle/université/sae-203-2025-coulon-estelle/src/assets/images/partenaires/france_trois.png";
							}
							
							return target[name];
						}
					});

const gouvernement = new Proxy({"src":"/_astro/gouvernement.BfsV3eTy.png","width":215,"height":127,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/estelle/université/sae-203-2025-coulon-estelle/src/assets/images/partenaires/gouvernement.png";
							}
							
							return target[name];
						}
					});

const le_monde = new Proxy({"src":"/_astro/le_monde.DzEJhbyk.png","width":407,"height":130,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/estelle/université/sae-203-2025-coulon-estelle/src/assets/images/partenaires/le_monde.png";
							}
							
							return target[name];
						}
					});

const pass_culture = new Proxy({"src":"/_astro/pass_culture.BJvtBKZj.png","width":299,"height":126,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/estelle/université/sae-203-2025-coulon-estelle/src/assets/images/partenaires/pass_culture.png";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class=" bg-green-50"> <div> ${renderComponent($$result2, "Image", $$Image, { "src": accueil, "alt": "Robot", "class": "relative w-full lg:w-1/2 lg:ml-96" })} <div class="absolute inset-0 flex flex-col items-center justify-center text-center"> <div class="pb-10"> <h1>SCI-FISTIVAL</h1> <h3>Ce festival n’existe</h3> <h3>pas sans vous</h3> </div> <div class="pb-10"> <h2>14 & 15</h2> <h2>MARS 2025</h2> <h4>2 Rue André Parant, </h4> <h4>90000 Belfort</h4> </div> </div> <div> <ul> <li> <h4 class="pb-10 pt-10 text-center space-x-10">Ne manquez pas l’événement de l’année, réservez votre place aujourd’hui !</h4> <div class="flex justify-center"> ${renderComponent($$result2, "Button", $$Button, { "variant": "default", "url": "/reservez", "text": "R\xE9servez un billet" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": fleche_sci_fi, "alt": "Fl\xE8che" })} ` })} </div> </li> <li> <div class=" pt-10 flex items-center justify-center"> <h4>Vous voulez Exposé dans notre festival ?</h4> </div> <div class="pb-10 flex items-center justify-center"><p>Alors inscrivez-vous en cliquant ci-dessous</p></div> <div class="flex justify-center"> ${renderComponent($$result2, "Button", $$Button, { "variant": "default", "url": "/Inscription", "text": "Inscription" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": fleche_sci_fi, "alt": "Fl\xE8che" })} ` })} </div> </li> <li> <div class="pb-10 pt-10 flex justify-center"> <h4>Le programme de ce week-end est disponible !</h4> </div> <div class="flex justify-center"> ${renderComponent($$result2, "Button", $$Button, { "variant": "default", "url": "/Programmation", "text": "Programmation" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": fleche_sci_fi, "alt": "Fl\xE8che" })} ` })} </div> </li> </ul> </div> <div> <h3 class="pt-10 flex justify-center">Nos partenaires</h3> <div class=" flex items-center justify-center mt-28"> <div class=" overflow-x-auto flex space-x-4 snap-x snap-mandatory"> <div class=" flex-shrink-0 snap-center relative "> ${renderComponent($$result2, "Image", $$Image, { "class": "", "src": france_trois, "alt": "" })} </div> <div class=" flex-shrink-0 snap-center relative "> ${renderComponent($$result2, "Image", $$Image, { "class": "", "src": gouvernement, "alt": "" })} </div> <div class=" flex-shrink-0 snap-center relative "> ${renderComponent($$result2, "Image", $$Image, { "class": "", "src": le_monde, "alt": "" })} </div> <div class=" flex-shrink-0 snap-center relative "> ${renderComponent($$result2, "Image", $$Image, { "class": "", "src": pass_culture, "alt": "" })} </div> </div> </div> </div> </div> </div>` })}`;
}, "C:/estelle/universit\xE9/sae-203-2025-coulon-estelle/src/pages/index.astro", void 0);

const $$file = "C:/estelle/université/sae-203-2025-coulon-estelle/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
