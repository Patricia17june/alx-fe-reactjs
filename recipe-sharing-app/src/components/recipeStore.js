// src/store/recipeStore.js
import create from 'zustand';

// Zustand store to manage recipes
const useRecipeStore = create((set) => ({
  recipes: [], // Initial state: an empty array of recipes
  
  // Action to add a new recipe to the store
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
  
  // Action to update an existing recipe in the store
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  
  // Action to delete a recipe from the store
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));

// Export the store to be used in other components
export { useRecipeStore };
