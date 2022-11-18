import React, { useRef, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");
  const nameRef = useRef();
  const passRef = useRef();
  const handleClick = (event) => {
    event.preventDefault();
    if (
      nameRef.current.value === "admin" &&
      passRef.current.value === "admin"
    ) {
      setMsg("login sucessfully");
    } else {
      setMsg("login failed!");
    }
  };
  return (
    <div className="App">
      <form>
        <div className="username">
          <label>Username</label>
          <input type="text" name="username" required ref={nameRef} />
        </div>
        <div className="password">
          <label>Password</label>
          <input type="password" name="password" required ref={passRef} />
        </div>
        <button type="submit" onClick={handleClick}>
          Login
        </button>
        {msg}
      </form>
    </div>
  );
}
export default App;
