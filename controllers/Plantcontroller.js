const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    console.log("in find all", req.body)
    
    db.Houseplants
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Houseplants
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("in create")
    db.Houseplants
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    //passing it an array, change it to handle multiple documents at once - insert many and then send one response
  },
  createMany: function (req, res) {
    // console.log("in insert Many", req.body)

    const idArray = req.body.map(element => {
      return { id: element } //make sure whatever is passed is an object - make more complex on the front end, 35 to req.body
    })
    console.log("id array: ", idArray)
    db.Houseplants
      .insertMany(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    //passing it an array, change it to handle multiple documents at once - insert many and then send one response
  },
  update: function (req, res) {
    db.Houseplants
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Houseplants
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};