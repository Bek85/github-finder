import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const githubUrl = import.meta.env.VITE_GITHUB_URL;
const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get search results

  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`${githubUrl}/search/users?${params}`, {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });
    const { items } = await res.json();

    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };
  const getUser = async (username) => {
    setLoading();

    const res = await fetch(`${githubUrl}/users/${username}`, {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });

    if (res.status === 404) {
      window.location = '/notfound';
    } else {
      const user = await res.json();

      dispatch({
        type: 'GET_USER',
        payload: user,
      });
    }
  };

  const setLoading = () =>
    dispatch({
      type: 'SET_LOADING',
    });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        searchUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
