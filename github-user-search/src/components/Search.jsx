//Search.js
import React, { useState }  from 'react'
import  fetchUserData  from '../services/githubService'

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

        const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const data = await fetchUserData (username, location, minRepos);
             setUserData(data); // Store the user data in state;
        } catch (err) {
            setError('Looks like we cant find the user');
        } finally {
            setLoading(false);
        }
    };

    return (   
      <div className="container mx-auto p-4 class=h-14 bg-gradient-to-r from-violet-500 to-fuchsia-800">
      <h1 className="text-2xl font-bold mb-4 mt-20 text-white text-center pt-3 underline">GitHub User Search</h1>
            
        <form onSubmit={handleSubmit} className="space-y-3 flex flex-col place-items-center">

          <div className="text-center">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="GitHub Username"
            className="w-full p-2 border-white rounded"
          />
          </div>

             <div className="mb-4"> 
                <input 
                type="text" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter Location"
                className="w-full p-2 border-gray-300 rounded"
                />
             </div>

             <div className="mb-4 text-center">
                <input 
                type="number"
                value={minRepos}
                onChange={(e) => setMinRepos(e.target.value)}
                placeholder="Minimum repositories"
                className="w-full p-2 border-gray-300 rounded"
                />
             </div>
             <button type="submit" className='w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Search</button>
        </form>
    
     
    
      {loading && <p className="mt-4 text-gray-500 flex flex-col items-center">Loading...</p>}
      {error && <p className="mt-4 text-red-500 flex flex-col items-center">{error}</p>}
      {userData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userData.map((user) => (
            <div key={user.id} className="p-4 bg-white rounded-lg shadow-md">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <p>{user.login}</p>
              <p>{user.location}</p>
              <p>Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
     </div>
)};

export default Search;
