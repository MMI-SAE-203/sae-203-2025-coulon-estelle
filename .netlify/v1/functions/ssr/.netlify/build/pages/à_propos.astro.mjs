import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_tpToOTOX.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Button } from '../chunks/Layout_DOG6wjj8.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_DeDjrfMp.mjs';
export { renderers } from '../renderers.mjs';

const chat = new Proxy({"src":"/_astro/chat.C-CF5jiO.png","width":786,"height":922,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/estelle/université/sae-203-2025-coulon-estelle/src/assets/images/header_sci-fistival/chat.png";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-green-50"> ${renderComponent($$result2, "Image", $$Image, { "src": chat, "alt": "chat", "class": "relative w-full lg:w-1/2 lg:ml-96" })} <div class="absolute inset-0 flex flex-col items-center justify-center text-center"> <div class="pb-10"> <h1>SCI-FISTIVAL</h1> <h3>Ce festival n’existe</h3> <h3>pas sans vous</h3> </div> </div> <div> <div class="text-center pt-10 pb-10"> <h2>À propos</h2> </div> <div class="pb-10"> <p class="pb-5">Bienvenue au Sci-fi'stival, le rendez-vous incontournable pour tous les passionnés de science-fiction ! Rejoignez-nous le week-end du 14 mars au Glacis de Belfort, un espace en plein air pouvant accueillir entre 5 000 et 10 000 personnes. Ce festival unique est ouvert à tous, des étudiants aux familles, en passant par les amateurs de tous âges et horizons.</p> <p>Créé cette année, le Sci-fi'stival célèbre la science-fiction sous toutes ses formes. C'est l'occasion idéale pour rencontrer des réalisateurs, écrivains et artistes, découvrir leurs œuvres et échanger avec eux. Depuis sa création, le festival s'est rapidement imposé comme un événement majeur pour les fans du genre. Pour plus d’info, vous pouvez regarder notre programme du week-end! </p> </div> <div class="flex justify-center pb-10"> ${renderComponent($$result2, "Button", $$Button, { "variant": "default", "url": "/Programme", "text": "Programme" })} </div> <div class="pb-10"> <p class="pb-5">Le festival est organisé par une équipe passionnée, dirigée par Estelle Coulon, et soutenue par une équipe technique dévouée. Ensemble, ils veillent à ce que chaque projection et installation soit de la plus haute qualité.</p> <p class="pb-5">Belfort, ville dynamique et accessible, est bien desservie par les transports publics à des coûts abordables, facilitant les déplacements depuis les villes voisines comme Montbéliard, Besançon ou Mulhouse. Pour ceux venant de plus loin, Belfort propose un large choix d'hôtels et de restaurants à proximité du site, garantissant un séjour confortable.</p> <h4>Rejoignez-nous pour un week-end inoubliable dédié à la science-fiction !</h4> </div> <div class="flex justify-center pb-10"> ${renderComponent($$result2, "Button", $$Button, { "variant": "default", "url": "/Billetterie", "text": "R\xE9server le billet" })} </div> </div> </div>` })}`;
}, "C:/estelle/universit\xE9/sae-203-2025-coulon-estelle/src/pages/\xE0_propos/index.astro", void 0);

const $$file = "C:/estelle/université/sae-203-2025-coulon-estelle/src/pages/à_propos/index.astro";
const $$url = "/à_propos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
