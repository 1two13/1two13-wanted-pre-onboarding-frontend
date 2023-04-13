import { Routes, Route } from 'react-router-dom';

import TopFixedBar from './components/common/TopFixedBar';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <div>
      <TopFixedBar />
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
