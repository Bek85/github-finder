import axios from 'axios';
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

// Get search results
export const searchUsers = async (username) => {
  const params = new URLSearchParams({
    q: username,
  });

  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

// Get user and repos
export const getUserAndRepos = async (username) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${username}`),
    github.get(`/users/${username}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
