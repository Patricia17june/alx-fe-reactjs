// src/store/recipeStore.js
import create from 'zustand';

// Zustand store to manage recipes
const useRecipeStore = create((set) => ({
  recipes: [], // Array to store all recipes
  searchTerm: '', // The current search term entered by the user
  filteredRecipes: [], // Array to store filtered recipes based on the search term
  
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

    // Action to update the search term in the store
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to filter recipes based on the search term
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
}));

// Export the store to be used in other components
export { useRecipeStore };
