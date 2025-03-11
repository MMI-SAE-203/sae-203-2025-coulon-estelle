import PocketBase from "pocketbase";
const POCKETBASE_URL = "https://estatery.pockethost.io";
const pb = new PocketBase(POCKETBASE_URL);

export const getHouses = async (collection = "house") => {
try {
const houses = await pb.collection(collection).getFullList();
// Ajoute l'URL complète de l'image à chaque maison
const updatedHouses = houses.map((house) => ({
  ...house,
  imageUrl: house.house_img
    ? pb.files.getUrl(house, house.house_img[0], { thumb: "1024x1024" })
    : null,
}));
return updatedHouses;
} catch (error) {
console.error("Erreur lors de la récupération des événements :", error);
return []; // Retourne un tableau vide en cas d'erreur
}
};

export const oneHouse = async (id, collection = "house") => {
try {
const house = await pb.collection(collection).getOne(id);

house.imageUrlsFull = Array.isArray(house?.house_img)
? house.house_img.map((img) =>
    pb.files.getURL(house, img, { thumb: "1024x1024" })
  )
  : [];
  return house;
} catch (error) {
  console.error("Erreur :", error);
  return [];
}
};