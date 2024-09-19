//Search.js
import react, { useState }  from 'react'
import { fetchUserData } from '../services/githubService'

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

        const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
             setUserData(response.data); // Store the user data in state;
        } catch (err) {
            setError('Looks like we cant find the user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Github username"
             />
             <button type="submit">Search</button>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p>Error</p>}

        {userData && (
            <div>
            <h3>{userData.name ? userData : 'No nama available'}</h3>
            <p>Username: {userData.login}</p> {/* Display the GitHub login (username) */}
            <p>{userData.bio ? userData.bio : 'No bio available'}</p>

            <img src={userData.avatar_url} alt={userData.login} style={{ width: '100px' }} />
            <a href={userData.html_url} target="_blank" rel="noreferrer">View Profile</a>
            </div>
        )} 
        </div>
    );
};

export default Search;
