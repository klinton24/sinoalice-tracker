import './index.css';
import { User } from './models/user.js';
import { React, useState } from 'react';

function App() {
  const [user, setUser] = useState({
    email : "",
    password : "",
    userName : ""
    }
  );

  let onSubmit = () => {
    console.log(user);
  }

  let handleChange = ({ target }) => {
    setUser({ 
      [target.email]: target.value,
      [target.password]: target.value,
      [target.userName]: target.value,
     });
  }
  
  return (
    <div className="App">
        <h1>Login:</h1>
        <form>
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" value={user.email} onChange={handleChange}/><br/>
          <label for="password">Password:</label>
          <input type="text" id="password" name="password" value={user.password} onChange={handleChange}/><br/>
          <label for="userName">User Name:</label>
          <input type="text" id="userName" name="userName" value={user.userName} onChange={handleChange}/><br/>
        </form>        
        <button type="submit" onClick= {onSubmit} >Log In</button>
    </div>
  );
}
export default App;