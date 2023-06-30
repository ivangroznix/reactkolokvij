import React from "react";

const UserDetails = ({ user, repos, resetUser }) => {
  return (
    <div>
      <div>
        <img src={user.avatar_url} alt="Profilna slika" />
        <h2>{user.name}</h2>
        <p>Lokacija: {user.location}</p>
        <p>Detalji: {user.bio}</p>
      </div>
      <div>
        <h3>Repozitoriji:</h3>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      </div>
      <button onClick={resetUser}>Reset</button>
    </div>
  );
};

export default UserDetails;
