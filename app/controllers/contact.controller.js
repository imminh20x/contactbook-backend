module.exports = class ContactController {
  //create and save a new contact
  create = async (req, res) => {
    res.send({ message: "create handle" });
  };

  //Retrieve all contacts of a user from the database.
  findAll = async (req, res) => {
    res.send({ message: "findAll handle" });
  };

  //Retrieve all favorite contacts
  findAllFavorite = async (req, res) => {
    res.send({ message: "findAllFavorite handle" });
  };

  //Find a single contact with a id
  findOne = async (req, res) => {
    res.send({ message: "findOne handle" });
  };

  //Update a contact by a id in the request
  update = async (req, res) => {
    res.send({ message: "update handle" });
  };

  // Delete a contact with the specified id in the request
  deleteOne = async (req, res) => {
    res.send({ message: "delete handle" });
  };
  // Delete all contacts of a user from the database
  deleteAll = async (req, res) => {
    res.send({ message: "deleteAll handle" });
  };
};
//module.exports = {create, findAll, findAllFavorite, findOne, update, deleteAll, deleteOne}

//cach 2 dung class
// module.exports = class ContactController{
//   ghi phan nd vao
// }
