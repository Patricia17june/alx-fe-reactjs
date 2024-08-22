// src/components/RecipeList.js
import { useParams } from 'react-router-dom';
import React from 'react';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  const RecipeDetails = () => {
    const { recipeId } = useParams();
    // use recipeId as shown in the previous RecipeDetails component example
  
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};
};
export default RecipeList;
