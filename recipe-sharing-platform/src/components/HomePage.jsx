import React, { useState, useEffect } from 'react';
// Import your JSON data
import recipesData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Use useEffect to set the recipe data when the component mounts
  useEffect(() => {
    setRecipes(recipesData); // Load mock data from data.json
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Recipe List</h1>
 
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div 
          key={recipe.id} 
          className="bg-blue rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
        

            <img src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-40 object-cover rounded-t-lg" />


            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
