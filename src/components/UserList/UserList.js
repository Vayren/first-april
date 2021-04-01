import React  from 'react';
import UserItem from '../UserItem';

import './UserList.css';

const UserList = ({ users, onUserDelete }) => {
  return (
    <table className="user-list">
      <thead className="user-list-head">
        <tr>
          <th>User Name</th>
          <th>User Email</th>
          <th>Usr ID</th>
          <th colSpan="2" />
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <UserItem
            name={user.name}
            email={user.email}
            onUserDelete={onUserDelete}
            id={user.id}
            key={user.id}
          />
        ))}
      </tbody>
    </table>
  );
}

export default UserList;