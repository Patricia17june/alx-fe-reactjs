// src/components/SearchBar.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore'; // Import the store

const SearchBar = () => {
  // Access the setSearchTerm action from the store
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..." // Placeholder text for the input field
      onChange={(e) => setSearchTerm(e.target.value)} // Update the search term in the store on each input change
    />
  );
};

export default SearchBar;
