import React, { useState } from "react";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import TodoList from "./components/Todo/TodoList";
import Profile from "./components/Profile/Profile";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div>
      {!token ? (
        <>
          <Signup />
          <Login />
        </>
      ) : (
        <>
          <Profile token={token} />
          <TodoList token={token} />
        </>
      )}
    </div>
  );
};

export default App;
