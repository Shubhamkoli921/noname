// import logo from './logo.svg';

import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Web from './pages/web';
import Logo from './pages/lgo';
import Digi from './pages/Digi';
import All from './pages/all';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/webplan' element={<Web />} />
        <Route path='/logoplan' element={<Logo />} />
        <Route path='/digiplan' element={<Digi />} />
        <Route path='/allplan' element={<All />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
