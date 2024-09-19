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
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            setError('Looks like we cant find the user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form on submit={handleSubmit}>
            <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Github username"
             />
             <button type="submit">Search</button>
        </form>
    );
};

export default Search;
