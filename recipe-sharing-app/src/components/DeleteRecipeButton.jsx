// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from '../store/recipeStore';

// This component renders a button to delete a specific recipe
const DeleteRecipeButton = ({ recipeId }) => {
  // Access the deleteRecipe action from the store
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    // When clicked, this button will delete the recipe with the provided ID
    <button onClick={() => deleteRecipe(recipeId)}>Delete Recipe</button>
  );
};
