import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Homepage from './components/Homepage';
import Login from './components/Login';
import Playlistpage from './components/Playlistpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/playlistpage' element={<Playlistpage />} />
      </Routes>
    </Router>
  );
}

export default App;
