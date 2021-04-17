import './index.css';
import { User } from './models/user.js';

function App() {
  let user = {
    email : "",
    password : "",
    userName : ""
  };
  let onSubmit = () => {
    console.log(user);
  };

  const handleChange = event => {
    event.preventDefault();
    console.log(event.target.value);
  };

  return (
    <div className="App">
        <h1>Login:</h1>
        <form>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" value={user.email} onChange={handleChange} /><br/>
        <label for="password">Password:</label>
        <input type="text" id="password" name="password" value={user.password} /><br/>
        <label for="userName">User Name:</label>
        <input type="text" id="userName" name="userName" value={user.userName} /><br/>
        </form>
        <button type="submit" onClick={onSubmit}>Log In</button>
    </div>
  );
}

export default App;
