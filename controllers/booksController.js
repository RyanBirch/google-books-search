const db = require('../models')

module.exports = {
  findAll: function(req, res) {
    db.Book.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  create: function(req, res) {
    db.Book.create(req.body) 
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }, 

  deleteOne: function(req, res) {
    db.Book.deleteOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}