const express = require('express');
const config = require('./config.json');
const recipesApi = require('./api/recipes');
const app = express();

app.route('/api/recipes').get(recipesApi.getRecipes);

app.listen(config.server.port, () => {
  console.log(`Server running at http://localhost:${config.server.port}`);
});
