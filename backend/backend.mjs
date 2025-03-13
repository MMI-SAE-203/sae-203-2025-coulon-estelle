import PocketBase from "pocketbase";
export const pb = new PocketBase('http://127.0.0.1:8090/');


export async function getAllMoviesDate() {
  const records = await pb.collection('film').getFullList({
    sort: 'date_de_projection'
  });
  return records;
}

export async function getAllActivitesDate() {
  const records = await pb.collection('activite').getFullList({
    sort: 'date_de_projection'
  });
  return records;
}

export async function getAllParticipants() {
  const actors = await pb.collection('invite').getFullList({
    sort: 'nom_prenom'
  });
  return [...actors].sort((a, b) => a.nom_prenom.localeCompare(b.nom_prenom));
}

export async function getMovieById(id ) {
  const record = await pb.collection('film').getOne(id, {expand: 'realisateur_acteur'});
  return record;
}

export async function getActiviteById(id) {
  const record = await pb.collection('activite').getOne(id);
  return record;
}

export async function getParticipantById(id) {
  const record = await pb.collection('invite').getOne(id);
  return record;
}

export async function allActiviteByInvite(id) {
  return await pb.collection('activite').getFullList({
      filter: invite_activite.id = '${id}',
      expand: 'invite_activite',
  });
}

export async function allActiviteByName(nom_prenom) {
  return await pb.collection('activite').getFullList({
      filter: `invite_activite.nom_prenom = '${nom_prenom}'`,
      expand: 'invite_activite',
  });
}

export async function addNewActivite(newActivite) {
  await pb.collection('activite').create(newActivite);
}

export async function addNewMovie(newMovie) {
  await pb.collection('movie').create(newMovie);
}

export async function addNewInvite(newInvite) {
  await pb.collection('invite').create(newInvite);
}

export async function updateMovieById(id, data) {
  return await pb.collection('movie').update(id, data);
}

export async function updateInviteById(id, data) {
  return await pb.collection('invite').update(id, data);
}

export async function updateActiviteById(id, data) {
  return await pb.collection('activite').update(id, data);
}