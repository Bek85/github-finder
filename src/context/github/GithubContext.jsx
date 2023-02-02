import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const githubUrl = import.meta.env.VITE_GITHUB_URL;
const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const getUsers = async () => {
    setLoading();
    const res = await fetch(`${githubUrl}/users`, {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });
    const users = await res.json();

    dispatch({
      type: 'GET_USERS',
      payload: users,
    });
  };

  const setLoading = () =>
    dispatch({
      type: 'SET_LOADING',
    });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        getUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
