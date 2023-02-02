import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext';
GithubContext;

export default function User() {
  const { getUser, user } = useContext(GithubContext);
  const { username } = useParams();

  useEffect(() => {
    getUser(username);
  }, []);

  return <div>{user.login}</div>;
}
