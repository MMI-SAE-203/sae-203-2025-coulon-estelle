import PocketBase from "pocketbase";
const POCKETBASE_URL = "https://estatery.pockethost.io";
const pb = new PocketBase(POCKETBASE_URL);

export async function getAllMoviesDate() {
  const records = await pb.collection('film').getFullList({
    sort: 'date_de_projection'
  });
  return records;
}

export async function getAllMoviesDate() {
  const records = await pb.collection('film').getFullList({
    sort: 'date_de_projection'
  });
  return records;
}