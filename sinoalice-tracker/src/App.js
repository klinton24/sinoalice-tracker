import './index.css';

function App() {
  return (
    <div className="App">
        <h1>Login:</h1>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" /><br/>
        <label for="password">Password:</label>
        <input type="text" id="password" name="password" /><br/>
        <label for="userName">User Name:</label>
        <input type="text" id="userName" name="userName" /><br/>
        <button type="submit">Log In</button>
    </div>
  );
}

export default App;
