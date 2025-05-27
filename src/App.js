import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Login from './pages/Login';

import Main from './pages/Main';

import { BrowserRouter , Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Main />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
