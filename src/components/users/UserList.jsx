import { useQuery } from 'react-query';
import { getUsers } from '../../api/apiCalls';
import Spinner from '../layout/Spinner';

export default function UserList() {
  const { data, isLoading, isError, error } = useQuery('github_users', () =>
    getUsers()
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {data.map((user) => (
        <h3>{user.login}</h3>
      ))}
    </div>
  );
}
