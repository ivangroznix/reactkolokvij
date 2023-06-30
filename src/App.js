import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserDetails from "./components/UserDetails";
import "./styles/App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const getUser = async (username) => {
    try {
      const responseUser = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userData = await responseUser.json();
      const responseRepos = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const reposData = await responseRepos.json();

      setUser(userData);
      setRepos(reposData);
    } catch (error) {
      console.error(
        "Greška prilikom dohvaćanja korisnika i repozitorija:",
        error
      );
    }
  };

  const resetUser = () => {
    setUser(null);
    setRepos([]);
  };

  return (
    <div>
      {user ? (
        <UserDetails user={user} repos={repos} resetUser={resetUser} />
      ) : (
        <UserForm getUser={getUser} />
      )}
    </div>
  );
};

export default App;
