import axios from 'axios';

const fetchUserData = async (username, location, minRepos) => {
  try {
    // First, search for users based on query
    const query = `${username} in:login ${location ? `location:${location}` : ''} ${minRepos ? `repos:>=${minRepos}` : ''}`;
    const searchResponse = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);

    const userDetails = await Promise.all(
      searchResponse.data.items.map(async (user) => {
        const userDetailResponse = await axios.get(`https://api.github.com/users/${user.login}`);
        return userDetailResponse.data;  // Returns full user data
      })
    );

    return userDetails;  // Return full details for all users
  } catch (error) {
    throw new Error('Error fetching users');
  }
};

export default fetchUserData;
