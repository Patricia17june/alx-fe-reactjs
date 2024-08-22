// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleDelete = () => {
    deleteRecipe(recipeId); // Delete the recipe from the store
    navigate('/'); // Navigate to the homepage or another route after deletion
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
