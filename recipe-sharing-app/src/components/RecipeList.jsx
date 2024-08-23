// src/components/RecipeList.js
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore'; // Import the store
import { useParams } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  // Access filtered recipes and actions from the store
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const RecipeDetails = () => {
    const { recipeId } = useParams();
    
    // Use effect to trigger filtering whenever the search term changes
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]); // Re-run filtering when searchTerm changes

  
  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          {/* Link to the recipe details page */}
          <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
        </div>
      ))}
    </div>
  );
};
};
export default RecipeList;
