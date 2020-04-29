import axios from 'axios';

export async function getRecipes() {
  return await axios.get(`/api/recipes`);
}
