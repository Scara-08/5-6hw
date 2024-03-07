import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/usersSlice/usersSlice';
import style from './style.module.css'

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
if(loading === 'loading'){
  return <>loading</>
}
if(error === 'Error'){
  return <>Error</>
}

  return (
    <div>
      {/* {loading === 'loading' && <p>Loading...</p>} */}
      {/* {error && <p>Error: {error}</p>} */}
      {users.length > 0 && (
        <ul >
          {users.map((user) => (
            <li className={style.section} key={user.id}>
              <p className={style.txt}>{user.username}</p>
              <p className={style.txt}>{user.email}</p>
              <p className={style.txt}>{user.phone}</p>
              </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
