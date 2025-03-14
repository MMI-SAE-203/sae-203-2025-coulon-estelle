import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_tpToOTOX.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DOG6wjj8.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_DeDjrfMp.mjs';
import { C as Cyber } from '../chunks/cyber_Iiq-JQFs.mjs';
import { $ as $$ImgPb, a as allActiviteByInvite } from '../chunks/ImgPb_7micqpKi.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CardInvite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardInvite;
  const { ...invite } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article> <a${addAttribute(`/Programmefilms/${invite.id}`, "href")}> ${renderComponent($$result, "ImgPb", $$ImgPb, { "record": invite, "field": "image", "alt": invite.nom_prenom, "classPicture": "col-span-1 row span-3 flex items-center justify-center", "classImg": "object-cover" })} </a> <div class="relative px-6 py-4 space-y-2"> <p class=" font-semibold py-2 flex justify-center items-center"> <a class="text-black"${addAttribute(`/Programmefilms/${invite.id}`, "href")}>${invite.nom_prenom}</a> </p> <p class="text-black flex justify-center items-center"></p><p class=" font-bold ">${invite.biographie}</p>  </div> </article>`;
}, "C:/estelle/universit\xE9/sae-203-2025-coulon-estelle/src/components/CardInvite.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const invites = await allActiviteByInvite();
  console.log(invites);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-green-50"> ${renderComponent($$result2, "Image", $$Image, { "src": Cyber, "alt": "chat", "class": "relative w-full lg:w-1/2 lg:ml-96" })} <div class="absolute inset-0 flex flex-col items-center justify-center text-center"> <div class="pb-10"> <h1>SCI-FISTIVAL</h1> <h3>Ce festival n’existe</h3> <h3>pas sans vous</h3> </div> </div> <div> <div class="text-center pt-10 pb-10"> <h2>Liste des Invités</h2> </div> <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8"> ${invites.length > 0 ? invites.map((invite) => renderTemplate`${renderComponent($$result2, "CardInvite", $$CardInvite, { ...invite })}`) : renderTemplate`<p>Aucun invité trouvé.</p>`} </div></div></div>` })}`;
}, "C:/estelle/universit\xE9/sae-203-2025-coulon-estelle/src/pages/Invites/index.astro", void 0);

const $$file = "C:/estelle/université/sae-203-2025-coulon-estelle/src/pages/Invites/index.astro";
const $$url = "/Invites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
