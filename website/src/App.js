import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Funding from './Pages/Funding';
import Welcome from './Pages/Welcome';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}> Login</Route>
        <Route path='/funding' element={<Funding />}>Funding</Route>
        <Route path='/welcome' element={<Welcome />}>Welcome</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
