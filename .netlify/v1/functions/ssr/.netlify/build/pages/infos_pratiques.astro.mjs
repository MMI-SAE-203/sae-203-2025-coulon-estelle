import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_tpToOTOX.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Button } from '../chunks/Layout_DOG6wjj8.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_DeDjrfMp.mjs';
export { renderers } from '../renderers.mjs';

const lune = new Proxy({"src":"/_astro/lune.BjgaeKYP.png","width":786,"height":926,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/estelle/université/sae-203-2025-coulon-estelle/src/assets/images/header_sci-fistival/lune.png";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-green-50"> ${renderComponent($$result2, "Image", $$Image, { "src": lune, "alt": "chat", "class": "relative w-full lg:w-1/2 lg:ml-96" })} <div class="absolute inset-0 flex flex-col items-center justify-center text-center"> <div class="pb-10"> <h1>SCI-FISTIVAL</h1> <h3>Ce festival n’existe</h3> <h3>pas sans vous</h3> </div> </div> <div> <div class="text-center pt-10 pb-10"> <h2>Info Festival</h2> </div> <div class="pb-10"> <h3 class="pb-5">Combien ça coûte?</h3> <p class="pb-5">Les billets sont à 15€ par jour, ou 40€ pour le week-end complet. Des réductions de 10% sont disponibles pour les étudiants, les familles nombreuses et les groupes de plus de 10 personnes.</p> </div> <div class="flex justify-center pb-10"> ${renderComponent($$result2, "Button", $$Button, { "variant": "default", "url": "/Billeterie", "text": "R\xE9server le billet" })} </div> <div class="pb-10"> <h3 class="pb-5">Où ce passe le festival ?</h3> <p class="pb-5">Le festival se tiendra principalement au Glacis de Belfort, situé au 2 Rue André Parant, 90000 Belfort. Les projections auront lieu au Cinéma Pathé Belfort, situé au 1 Rue de l'As de Carreau, 90000 Belfort. Divers ateliers et conférences se dérouleront au Centre Culturel et Social des Résidences Bellevue, au 4 Rue de Madrid, 90000 Belfort.</p> </div> <div class="pb-10"> <h3 class="pb-5">Où ce loger ?</h3> <p class="pb-5">Pour votre séjour, vous pouvez réserver une chambre à l'Hôtel Kyriad Belfort Centre ou à l'Hôtel Première Classe Belfort. Si vous préférez le camping, le Camping de l'Étang des Forges et le Camping du Lac de Malsaucy sont à votre disposition.</p> </div> <div class="pb-10"> <h3 class="pb-5">Comment y aller ?</h3> <p class="pb-5">La Gare de Belfort est bien desservie par les TGV et TER, facilitant votre arrivée en train. Si vous venez en voiture, prenez l'autoroute A36 et sortez à Belfort. Le covoiturage est également une option pratique, avec des plateformes comme BlaBlaCar. Des parkings sont disponibles à proximité du site du festival.</p> </div> <h4>Nous vous attendons nombreux pour un week-end inoubliable dédié à la science-fiction ! Pour plus d'informations, consultez notre site internet.</h4> </div> </div> ` })}`;
}, "C:/estelle/universit\xE9/sae-203-2025-coulon-estelle/src/pages/infos_pratiques/index.astro", void 0);

const $$file = "C:/estelle/université/sae-203-2025-coulon-estelle/src/pages/infos_pratiques/index.astro";
const $$url = "/infos_pratiques";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
