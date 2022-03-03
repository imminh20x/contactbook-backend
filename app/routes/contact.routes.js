const express = require("express");
const ContactController = require("../controllers/contact.controller");

module.exports = (app) => {
  const router = express.Router();
  const contacts = new ContactController();
  router.route("/")
    .post(contacts.create)
    .get(contacts.findAll)
    .delete(contacts.deleteAll);
  router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.deleteOne)
  router.route("/favorite")
    .get(contacts.findAllFavorite);
//   //create a new contact
//   router.post("/", contacts.create);
//   //retrieve all contacts
//   router.get("/", contacts.findAll);

//   // //retrieve all favorite contacts
//   router.get("/favorite", contacts.findAllFavorite);

//   // // //retrieve a single contact with id
//   router.get("/:id", contacts.findOne);

//   // // //update a contact with id
//   router.put("/:id", contacts.update);

//   // // //delete a contact with id
//   router.delete("/:id", contacts.deleteOne);

//   // // //delete all contacts
//   router.delete("/", contacts.deleteAll);

  app.use("/api/contacts", router);
};
