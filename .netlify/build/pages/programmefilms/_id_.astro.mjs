import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_tpToOTOX.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DOG6wjj8.mjs';
import { b as getMovieById, $ as $$ImgPb } from '../../chunks/ImgPb_7micqpKi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const film = await getMovieById(Astro2.params.id);
  console.log(film);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="pb-10 pt-10"> <a${addAttribute(`/Programmefilms/${film.id}`, "href")}> ${renderComponent($$result2, "ImgPb", $$ImgPb, { "record": film, "field": "image", "alt": film.titre, "classPicture": "col-span-1 row span-3 flex items-center justify-center", "classImg": "object-cover" })} </a> <div class="relative px-6 py-4 space-y-2"> <p class=" font-semibold py-2 flex justify-center items-center">${film.titre} </p> <p class="text-black flex justify-center items-center">${film.date_de_projection} </p> <p class=" font-semibold py-2 flex justify-center items-center">${film.synopsis} </p> <p class=" font-semibold py-2 flex justify-center text-center"> <a class="text-black"${addAttribute(`/Programmefilms/${film.id}`, "href")}>${film.bande_annonce}</a> </p> <div class="font-semibold py-2 grid grid-cols-3 gap-4"></div> <p>${film.langue} </p> <p>${film.production} </p> <p>${film.expand?.realisateur_acteur.nom_prenom} </p> <p>${film.date_de_projection} </p> <p>${film.duree} </p> <p>${film.annee_de_sortie} </p> </div> </article> ` })}`;
}, "C:/estelle/universit\xE9/sae-203-2025-coulon-estelle/src/pages/Programmefilms/[id].astro", void 0);

const $$file = "C:/estelle/université/sae-203-2025-coulon-estelle/src/pages/Programmefilms/[id].astro";
const $$url = "/Programmefilms/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
