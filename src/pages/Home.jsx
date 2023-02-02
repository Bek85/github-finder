import UserList from '../components/users/UserList';
import UserSearch from '../components/users/UserSearch';

export default function Home() {
  return (
    <>
      <UserSearch />
      <UserList />
    </>
  );
}
