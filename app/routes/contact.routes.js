const express = require("express");
const ContactController = require("../controllers/contact.controller");

module.exports = (app) => {
  const router = express.Router();
  const contacts = new ContactController();
  //create a new contact
  router.post("/", contacts.create);

  //retrieve all contacts
  router.get("/", contacts.findAll);

  // //retrieve all favorite contacts
  router.get("/favorite", contacts.findAllFavorite);

  // // //retrieve a single contact with id
  router.get("/:id", contacts.findOne);

  // // //update a contact with id
  router.put("/:id", contacts.update);

  // // //delete a contact with id
  router.delete("/:id", contacts.deleteOne);

  // // //delete all contacts
  router.delete("/", contacts.deleteAll);

  app.use("/api/contacts", router);
};
