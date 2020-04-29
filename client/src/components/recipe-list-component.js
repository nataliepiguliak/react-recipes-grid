import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const recipeListComponent = (props) => {
  return (
    <div>
      <h2>Recipes</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell style={{ width: 300 }}>Ingredients</TableCell>
              <TableCell>Steps</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.recipes.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <ul>
                    {row.ingredients.map((ingredient, index) => {
                      return (
                        <li key={row.id + '-' + index}>
                          {ingredient.name} - {ingredient.quantity}
                        </li>
                      );
                    })}
                  </ul>
                </TableCell>
                <TableCell>
                  <ol>
                    {row.steps.map((step, index) => {
                      return <li key={row.id + '-' + index}>{step}</li>;
                    })}
                  </ol>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default recipeListComponent;
