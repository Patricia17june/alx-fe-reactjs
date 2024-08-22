// src/components/EditRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

// This component provides a form to edit an existing recipe
const EditRecipeForm = ({ recipeId }) => {
  // Access the updateRecipe action and the specific recipe from the store
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  // Local state to manage form inputs
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  // Handle form submission to update the recipe
  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ id: recipeId, title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for the recipe title */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      {/* Text area for the recipe description */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      {/* Button to submit the updated recipe */}
      <button type="submit">Update Recipe</button>
    </form>
  );
};
