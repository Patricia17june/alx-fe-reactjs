import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import RecipesDetails from '../data.json';

const RecipeDetail = () => {
    const { id } = useParams();
    const[recipe, setRecipe] = useState(null);

    useEffect(() => {
        const selectedRecipe = RecipesDetails.find((item)  => item.id === parseInt(id));
        setRecipe(selectedRecipe);
        console.log(selectedRecipe);
    }, [id]);

    if(!recipe) {
        return<div className="text-center text-red-500">Recipe not found!</div>;
    }

    return(
        <div className="container mx-auto p-4">
            
            <div className="bg-gray-100 max-w-sm md:max-w-xl mx-auto rounded-lg shadow-lg mt-6 p-6">
                <img 
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-64 object-cover rounded-lg mb-4" 
                />
                <h1 className="text-amber-600 underline text-3xl font-bold mb-4">{recipe.title}</h1>
                <p className="text-gray-700 mb-6">{recipe.summary}</p>
                
            
                <div className="mb-4 font-style: italic;">
                  <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                  <ul className="list-disc list-inside">
                  {recipe.ingredients?.map((ingredient, index) => (
                    <li key={index} className="text-gray-600">{ingredient}</li>
                  ))}
                  </ul>
                </div>

                
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Instructions</h2>
                    <ol className="list-decimal list-inside">
                        {recipe.instructions?.map((instruction, index) => (
                           <li key={index} className="text-gray-600">{instruction}</li> 
                        ))}
                    </ol>
                </div>
            </div>
            <div className="mt-4">
            <Link to="/" className="text-blue-500 hover:underline">Back to recipes</Link>
            </div>
        </div>
    )
}

export default RecipeDetail;
