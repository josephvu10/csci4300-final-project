import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Homepage from './components/Homepage';
import Login from './components/Login';
import CreateAccount from '../createAccount';
import Playlistpage from './components/Playlistpage';
import Editpage from '../editSong';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createAccount' element={<CreateAccount />} />
        <Route path='/authenticatedPage' element={<AuthenticatedPage />} />
        <Route path='/playlistpage' element={<Playlistpage />} />
        <Route path='/edit' element={<Editpage/>} />
      </Routes>
    </Router>
  );
}

export default App;
