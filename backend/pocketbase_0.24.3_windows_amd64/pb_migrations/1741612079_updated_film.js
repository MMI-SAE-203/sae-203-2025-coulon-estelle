/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date2877274892",
    "max": "",
    "min": "",
    "name": "horaire_fin",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file3309110367",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4286007220",
    "max": 0,
    "min": 0,
    "name": "titre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1200832254",
    "max": 0,
    "min": 0,
    "name": "realisateur",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "date3150462390",
    "max": "",
    "min": "",
    "name": "horaire_debut",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // remove field
  collection.fields.removeById("date2877274892")

  // remove field
  collection.fields.removeById("file3309110367")

  // remove field
  collection.fields.removeById("text4286007220")

  // remove field
  collection.fields.removeById("text1200832254")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "date3150462390",
    "max": "",
    "min": "",
    "name": "horaire",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
