import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import RecipeListPage from './pages/recipe-list-page';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar></Toolbar>
        </AppBar>
        <RecipeListPage></RecipeListPage>
      </div>
    );
  }
}

export default App;
