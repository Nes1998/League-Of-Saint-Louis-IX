import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Funding from './Pages/Funding';
import Welcome from './Pages/Welcome';
import Login from './Pages/Login';
import ExpandedHeader from './Components/Header/ExpandedHeader';
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/funding' element={<Funding />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/expanded-header' element={<ExpandedHeader />} />
        <Route path='/header' element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
