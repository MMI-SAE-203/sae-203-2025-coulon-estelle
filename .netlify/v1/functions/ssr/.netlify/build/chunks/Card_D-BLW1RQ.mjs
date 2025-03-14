import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_tpToOTOX.mjs';
import 'kleur/colors';
import { $ as $$ImgPb } from './ImgPb_7micqpKi.mjs';

function formatDate(dateString) {
    const date = new Date(dateString);

    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",    
      timeZone: "UTC",
    };

    const formatter = new Intl.DateTimeFormat("fr-FR", options);
    const formattedDate = formatter.format(date);

    return formattedDate;
  }

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { ...film } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article> <a${addAttribute(`/Programmefilms/${film.id}`, "href")}> ${renderComponent($$result, "ImgPb", $$ImgPb, { "record": film, "field": "image", "alt": film.titre, "classPicture": "col-span-1 row span-3 flex items-center justify-center", "classImg": "object-cover" })} </a> <div class="relative px-6 py-4 space-y-2"> <p class=" font-semibold py-2 flex justify-center items-center"> <a class="text-black"${addAttribute(`/Programmefilms/${film.id}`, "href")}>${film.titre}</a> </p> <p class="text-black flex justify-center items-center"> <span class=" font-bold ">${formatDate(film.date_de_projection)}</span> </p> </div> </article>`;
}, "C:/estelle/universit\xE9/sae-203-2025-coulon-estelle/src/components/Card.astro", void 0);

export { $$Card as $ };
