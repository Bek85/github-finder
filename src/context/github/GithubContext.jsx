import { createContext } from 'react';
import { useQuery } from 'react-query';
import { getUsers } from '../../api/apiCalls';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const { data, isLoading, isError, error } = useQuery('github_users', () =>
    getUsers()
  );
  return (
    <GithubContext.Provider
      value={{
        users: data,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
