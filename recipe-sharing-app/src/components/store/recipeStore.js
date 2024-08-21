// src/store/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],  // Initial state: an empty array of recipes
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe]  // Action to add a new recipe
  })),
  setRecipes: (recipes) => set({ recipes })  // Action to set the initial recipes
}));

export default useRecipeStore;
