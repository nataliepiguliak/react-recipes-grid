const data = require('../data/recipes.json');

const getRecipes = (req, res) => {
  res.status(200).json(data);
};

exports.getRecipes = getRecipes;
