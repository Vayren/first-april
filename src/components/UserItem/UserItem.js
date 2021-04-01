import React from 'react';

import './UserItem.css';

const URL = `${process.env.REACT_APP_JSON_SERVER}`;

const UserItem = ({ name, email, id, onUserDelete }) => {
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${URL}/users/${id}`, {
        method: 'DELETE'
      });
      
      await response.json();

      onUserDelete(id);
    } catch (error) {
      return null;
    }
  };

  return (
    <tr className="user-item">
      <td className="user-item">{name}</td>
      <td className="user-item">{email}</td>
      <td className="user-item">{id}</td>
      <td className="user-item">
        <button
          className="btn delete-button"
          type="button"
          onClick={() => deleteUser(id)}
        >
          Delete User
        </button>
      </td>
    </tr>
  )
}

export default UserItem;