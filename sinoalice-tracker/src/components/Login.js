import { React, useState } from 'react';

function Login() {
  const [user, setUser] = useState({
    email : "",
    password : "",
    userName : ""
    }
  );

  let onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }

  let handleChange = e => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value      
     });
  }

  return (
    <>
        <h1>Login:</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" value={user.email} onChange={handleChange}/><br/>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" name="password" value={user.password} onChange={handleChange}/><br/>
          <label htmlFor="userName">User Name:</label>
          <input type="text" id="userName" name="userName" value={user.userName} onChange={handleChange}/><br/>
          <button type="submit" onClick= {onSubmit} >Log In</button>
        </form>        
    </>
  );
}
export default Login;