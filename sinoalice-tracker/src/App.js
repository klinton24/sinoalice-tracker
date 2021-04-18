import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';

function App() {

  return (
    <Router className="App">
      <Route path="/register">
      <Login />
      </Route>
    </Router>
  );
}
export default App;