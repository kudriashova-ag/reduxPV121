import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/posts'>posts</NavLink>
        <NavLink to='/register'>register</NavLink>
        <NavLink to='/login'>login</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
