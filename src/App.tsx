import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Nav } from "./components/Nav";
import { RedirectRoute } from "./components/RedirectRoute";
import { TestPost } from "./components/testComponents/TestPost";
import { Login } from './modules/auth/Login';
import { Register } from './modules/auth/Register';
import { Todo } from './modules/Todo/Todo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/todo" element={
            <RedirectRoute privatePath>
              <Todo />
            </RedirectRoute>
          } />
          <Route path="/login" element={
            <RedirectRoute>
              <Login />
            </RedirectRoute>
          } />
          <Route path="/Register" element={
            <RedirectRoute>
              <Register />
            </RedirectRoute>
          } />
          <Route path="/test" element={"TEST"} />
          <Route path="/post/:slug" element={<TestPost />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 NO FOUND!</p>
              </main> 
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
