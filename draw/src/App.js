import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import React from 'react'
import Welcome from './components/Welcome';
import Waiting from './components/Waiting';
import ChooseWords from './components/ChooseWords';
import Drawing from './components/Drawing';
import Guessing from './components/Guessing';
import Example from './components/Example';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Welcome />} />
    <Route path='/waiting' element={<Waiting/>} />
    <Route path='/choose-words' element={<ChooseWords/>} />
    <Route path='/drawing' element={<Drawing/>} />
    <Route path='/guessing' element={<Guessing/>} />
    <Route path='/example' element={<Example/>} />
    </Routes>
    <ToastContainer/>
    </Router>
  );
}