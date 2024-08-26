// src/store/recipeStore.js
import create from 'zustand';

// Zustand store to manage recipes, favorites, and recommendations
const useRecipeStore = create((set) => ({
  // Array to store all recipes
  recipes: [],

  // Array to store filtered recipes based on the search term
  filteredRecipes: [],

  // The current search term entered by the user
  searchTerm: '',

  // Array to store the IDs of favorite recipes
  favorites: [],

  // Array to store recommended recipes based on user preferences
  recommendations: [],

  // Action to set the recipes array (e.g., after fetching data)
  setRecipes: (recipes) => set({ recipes }),

  // Action to add a new recipe to the store
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.filteredRecipes, newRecipe],
    })),

  // Action to update an existing recipe in the store
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
      filteredRecipes: state.filteredRecipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Action to delete a recipe from the store
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== id),
    })),

  // Action to update the search term in the store
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to filter recipes based on the search term
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Action to add a recipe to favorites by its ID
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  // Action to remove a recipe from favorites by its ID
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Action to generate personalized recommendations based on the user's favorite recipes
  generateRecommendations: () =>
    set((state) => {
      // Mock implementation where recommended recipes are chosen randomly from the favorites
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

// Export the store to be used in other components
export default useRecipeStore;
