const Dog = require('../lib/models/Dog');

module.exports = function(count = 12) {
  const dogs = [...Array(count)].map((_, i) => ({
    name: `Dog ${i}`,
    weight: `12 ${i}`,
    age: `2 ${i}`
  }));

  return Dog.create(dogs);
};
