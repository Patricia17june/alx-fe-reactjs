// src/components/RecipeDetails.jsx
import { useRecipeStore } from '../store/recipeStore';

// This component displays the details of a specific recipe
const RecipeDetails = ({ recipeId }) => {
  // Access the specific recipe from the store using the recipeId
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  return (
    <div>
      {/* Display the title and description of the recipe */}
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* You can add EditRecipeForm and DeleteRecipeButton components here */}
    </div>
  );
};
