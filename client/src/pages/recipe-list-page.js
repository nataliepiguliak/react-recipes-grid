import React, { Component } from 'react';
import RecipeListComponent from '../components/recipe-list-component';
import './recipe-list-page.css';
import { getRecipes } from '../services/recipe-service';

class RecipeListPage extends Component {
  state = {
    recipes: [],
  };

  async componentDidMount() {
    const response = await getRecipes();
    this.setState({ recipes: response.data });
  }

  render() {
    return (
      <div className="recipe-list-page">
        <RecipeListComponent recipes={this.state.recipes}></RecipeListComponent>
      </div>
    );
  }
}

export default RecipeListPage;
