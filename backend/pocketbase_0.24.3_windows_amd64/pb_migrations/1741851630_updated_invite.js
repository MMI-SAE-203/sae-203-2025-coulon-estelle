/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4042354073")

  // remove field
  collection.fields.removeById("relation3094697237")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4042354073")

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation3094697237",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "activite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
