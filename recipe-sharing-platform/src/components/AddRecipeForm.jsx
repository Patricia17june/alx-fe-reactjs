import React, { useState } from 'react';

const AddRecipeForm = () => {
    const [ formData, setFormData] = useState({
        title:'',
        ingredients:'',
        steps:'',
    })
    const[errors, setErrors] = useState({})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        let formErrors = {};

        if (!formData.title) {
            formErrors.title = 'Title is required';
        }

        const ingredientsArray = formData.ingredients.split(',').map((item) => item.trim());
        if (!formData.ingredients) {
            formErrors.ingredients = 'Ingredients are required';
        } else if (ingredientsArray.length < 2) { 
            formErrors.ingredients = 'please provide atleast two ingredients';
        }

        if (!formData.steps) {
            formErrors.steps = 'steps are required'
        }

        setErrors(formErrors);
        return object.keys(formErrors).lenght === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted:', formData)
            //Reset the form after successful submission
            setFormData({
                title: '',
                ingredients: '',
                steps: '',
            });
            setErrors({}); // clear errors after submission
        } else {
            console.log('Form has errors');
        }
    };

    return (
        <div className='container mx-auto h-screen flex flex-col items-center justify-center'>
            <div className='shadow p-8 w-[15rem] md:w-[20rem]'>
                <h1 className='mb-5 uppercase font-bold text-blue-500 underline'>Add your favourite Recipe</h1>
                <form onSubmit={handleSubmit} className='flex flex-col'>

                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700'>Recipe Title</label>
                        <input
                        type='text'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                        className='block text-sm font-medium text-gray-700'
                         />
                         {errors.title && <p className='text-red-500 text-sm mt-1'>{errors.title}</p>}
                    </div>

                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700'>Ingredients (comma separated)</label>
                        <textarea 
                        name='ingredients'  
                        value={formData.steps} 
                        onChange={handleChange} 
                        className='mt-1 p-2 block w-full border border-gray-300 rounded-md h-20 resize-none'
                        placeholder='e.g 200g spaghetti, 100 pancetta'
                         />
                         {errors.ingredients && <p className='text-red-500 text-sm mt-1'>{errors.ingredients}</p>}
                    </div>

                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700'>Preparation steps</label>
                        <textarea 
                        name='steps' 
                        value={formData.steps} 
                        onChange={handleChange} 
                        className='mt-1 p-2 block w-full border border-gray-300 rounded-md h-28 resize-none'
                        placeholder='Describe the steps to prepare the dish'
                         />
                         {errors.steps && <p className='text-red-500 text-sm mt-1'>{errors.steps}</p>}
                    </div>

                    <div>
                        <button 
                        type='submit' 
                        className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-transform'
                        >
                          Submit Recipe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddRecipeForm;
