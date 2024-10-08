import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';
import useRecipeStore from './store/recipeStore';
import AddRecipeForm from './components/AddRecipeForm';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  // Generate recommendations whenever the app loads or user data changes
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
    <div>
      <h1>Recipe Sharing Application</h1>
      <SearchBar /> {/* Search bar placed at the top for easy access */}
      <RecipeList /> {/* List of filtered recipes displayed below the search bar */}
    </div>
    <Router>
      <div>
        <SearchBar />
        <FavoritesList />
        <RecommendationsList />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App;
