import React, { useState } from "react";

const UserForm = ({ getUser }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(username);
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Unesite GitHub korisničko ime"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Prikaži</button>
    </form>
  );
};

export default UserForm;
