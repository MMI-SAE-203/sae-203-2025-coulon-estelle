import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_tpToOTOX.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Button } from '../chunks/Layout_DOG6wjj8.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center items-center py-6"> <div class="lg:grid lg:grid-cols-1 gap-6"> <h2 class="text-center py-6">Contact</h2> <div class="relative bg-teal-700 py-2 px-4 w-full max-w-md rounded-s"> <div class="flex flex-col items-center"> <h3 class="py-2 text-teal-50">Nom</h3> <input type="text" class="relative bg-white py-2 px-4 w-full max-w-md rounded-full"> </div> <div class="flex flex-col items-center"> <h3 class="py-2 text-teal-50">Prénom</h3> <input type="text" class="relative bg-white py-2 px-4 w-full max-w-md rounded-full"> </div> <div class="flex flex-col items-center"> <h3 class="py-2 text-teal-50">Email</h3> <input type="text" class="relative bg-white py-2 px-4 w-full max-w-md rounded-full"> </div> <div class="flex flex-col items-center"> <h3 class="py-2 text-teal-50">Messages</h3> <textarea class="relative bg-white py-2 px-4 w-full max-w-md rounded-full"></textarea> </div> <div class="flex justify-center items-center py-6"> ${renderComponent($$result2, "Button", $$Button, { "variant": "default", "url": "/", "text": "Envoyer" })} </div> </div> </div> </div> ` })}`;
}, "C:/estelle/universit\xE9/sae-203-2025-coulon-estelle/src/pages/contact/index.astro", void 0);

const $$file = "C:/estelle/université/sae-203-2025-coulon-estelle/src/pages/contact/index.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
