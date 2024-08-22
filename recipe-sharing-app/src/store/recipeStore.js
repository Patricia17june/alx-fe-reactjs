// src/store/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],  // Initial state: an empty array of recipes

  //action to add new recipe to the store
  addRecipe: (newRecipe) => 
    set((state) => ({
      //spread the existing recipes and add the new one
    recipes: [...state.recipes, newRecipe] 
  })),
  // Action to update an existing recipe in the store
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      // Use map to iterate over the recipes and replace the matching recipe
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
    // Action to delete a recipe from the store
  deleteRecipe: (recipeId) =>
    set((state) => ({
      // Filter out the recipe that matches the provided ID
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),
    
}));

export default useRecipeStore;
