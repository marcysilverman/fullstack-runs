const { Router } = require('express');
const Dog = require('../models/Dog');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { name, weight, age } = req.body;
    Dog.create({
      name, 
      weight,
      age
    })
      .then(dog => res.send(dog))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Dog
      .find()
      .lean()
      .then(note => res.send(note))
      .catch(next);
  });

