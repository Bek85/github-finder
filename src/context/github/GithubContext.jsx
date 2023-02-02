import { createContext, useReducer } from 'react';
import { searchUsers, getUserAndRepos } from './GithubActions';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        searchUsers,
        getUserAndRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
