import React, { useState } from 'react';

import './UserForm.css';

const URL = `${process.env.REACT_APP_JSON_SERVER}`;

const UserForm = ({ removeModal, onUserAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const postUser = async (userObject) => {
    const response = await fetch(`${URL}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userObject)
    });
    const responseJSON = await response.json();

    return responseJSON;
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      name,
      email,
      password
    }
    const responseUser = await postUser(newUser);

    onUserAdd(responseUser);
    removeModal();
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <label className="form-label">User Name</label>
        <input
          className="form-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Alex"
          required
        />
      </div>
      <div className="form-row">
        <label className="form-label">User E-mail</label>
        <input
          className="form-input"
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="alex@gmail.com"
          required
        />
      </div>
      <div className="form-row">
        <label className="form-label">User Password</label>
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-row">
        <button className="btn submit-btn" type="submit">Create User</button>
      </div>
    </form>
  );
};

export default UserForm;