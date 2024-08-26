// src/store/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set) => ({
  // Array to store all recipes
  recipes: [],

  // Search term for filtering recipes
  searchTerm: '',

  // Array to store filtered recipes based on search term
  filteredRecipes: [],

  // Function to set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Function to filter recipes based on the search term
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Function to add a new recipe
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.filteredRecipes, newRecipe],
  })),

  // Function to delete a recipe by its ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== id),
    })),

  // Function to update an existing recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
      filteredRecipes: state.filteredRecipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Array to store the IDs of favorite recipes
  favorites: [],

  // Function to add a recipe to favorites by its ID
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId],
  })),

  // Function to remove a recipe from favorites by its ID
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  // Array to store recommended recipes based on user preferences
  recommendations: [],

  // Function to generate personalized recommendations based on the user's favorite recipes
  generateRecommendations: () => set((state) => {
    // This is a mock implementation where recommended recipes are chosen randomly from the favorites
    const recommended = state.recipes.filter(
      (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

// Export the Zustand store
export default useRecipeStore;
