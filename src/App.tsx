import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav/index';
import { RedirectRoute } from './components/RedirectRoute';
import { TestPost } from './components/testComponents/TestPost';
import { Login } from './modules/auth/Login';
import { Register } from './modules/auth/Register';
import { TestComponent } from './modules/testComponents';
import { Todo } from './modules/Todo/Todo';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/todo"
          element={
            <RedirectRoute privatePath>
              <Todo />
            </RedirectRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectRoute>
              <Login />
            </RedirectRoute>
          }
        />
        <Route
          path="/Register"
          element={
            <RedirectRoute>
              <Register />
            </RedirectRoute>
          }
        />
        <Route path="/test" element={<TestComponent />} />
        <Route path="/post/:slug" element={<TestPost />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>404 NO FOUND!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
