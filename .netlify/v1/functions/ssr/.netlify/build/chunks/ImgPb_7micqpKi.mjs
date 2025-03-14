import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate } from './astro/server_tpToOTOX.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { a as $$Picture } from './_astro_assets_DeDjrfMp.mjs';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090/');


async function getAllMoviesDate() {
  const records = await pb.collection('film').getFullList({
    sort: 'date_de_projection'
  });
  return records;
}

async function getAllActivitesDate() {
  const records = await pb.collection('activite').getFullList({
    sort: 'date_de_projection'
  });
  return records;
}

async function getMovieById(id ) {
  const record = await pb.collection('film').getOne(id, {expand: 'realisateur_acteur'});
  return record;
}

async function allActiviteByInvite(id) {
  return await pb.collection('activite').getFullList({
      filter: invite_activite.id = '${id}',
      expand: 'invite_activite',
  });
}

const $$Astro = createAstro();
const $$ImgPb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImgPb;
  const { record, field = "imgUrl", alt, classPicture, classImg, thumb = "1024x1024" } = Astro2.props;
  const imageUrl = record?.[field] ? pb.files.getURL(record, record[field], { thumb }) : null;
  return renderTemplate`${imageUrl && renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "pictureAttributes": { class: classPicture }, "class": classImg, "inferSize": true, "formats": ["avif", "webp"], "alt": alt || "Image", "src": imageUrl })}`}`;
}, "C:/estelle/universit\xE9/sae-203-2025-coulon-estelle/src/components/ImgPb.astro", void 0);

export { $$ImgPb as $, allActiviteByInvite as a, getMovieById as b, getAllMoviesDate as c, getAllActivitesDate as g };
