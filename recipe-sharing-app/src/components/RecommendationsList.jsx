import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  // Get the list of recommended recipes from the store
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div>
      <h2>Recommended for You</h2>
      {/* Display each recommended recipe */}
      {recommendations.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
