// src/store/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.filteredRecipes, newRecipe],
  })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== id),
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
      filteredRecipes: state.filteredRecipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
    // Create the Zustand store to manage recipes, favorites, and recommendations
    // Array to store all recipes
    recipes: [],
  
    // Array to store the IDs of favorite recipes
    favorites: [],
  
    // Action to add a recipe to favorites by its ID
    addFavorite: (recipeId) => set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),
  
    // Action to remove a recipe from favorites by its ID
    removeFavorite: (recipeId) => set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  
    // Array to store recommended recipes based on user preferences
    recommendations: [],
  
    // Action to generate personalized recommendations based on the user's favorite recipes
    generateRecommendations: () => set((state) => {
      // This is a mock implementation where recommended recipes are chosen randomly from the favorites
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default { useRecipeStore };
