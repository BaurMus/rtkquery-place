import { useSelector } from "react-redux"
import { useActions } from "../../store/hooks/useActions";

export default function User() {
  const {isLoading, error, user} = useSelector(state => state.user);
  const {getUserById} = useActions();

  return (
    <div>
      {isLoading
        ? <div>Loading...</div>
        : error
          ? <div>{error}</div>
          : user?.name
            ? <h3>User: {user.name}</h3>
            : <h3>USER NOT FOUND</h3>
      }
      <button onClick={() => getUserById(1)}>Get user</button>
    </div>
  )
}