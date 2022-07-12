import './App.css';

import {
  Routes,
  Route,
  // Link,
} from "react-router-dom";

import { Simple } from './Samples/Simple';
function App() {
  return (
    <Routes>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Simple</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav> */}
      <Route
        index
        path={"/"}
        element={<Simple title={"Simple"} />}
      />
    </Routes>
  );
}

export default App;
