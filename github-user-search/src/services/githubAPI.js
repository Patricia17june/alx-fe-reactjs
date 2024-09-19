import axios from 'axios';

const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;
const BASE_URL = 'https://api.github.com/users/';

export const searchGitHubUser = async (UserName) => {
  const response = await axios.get(`${BASE_URL}${UserName}`, {
    headers: {
      Authorization: `token ${API_KEY}`,
    },
  });
  return response.data;
};
