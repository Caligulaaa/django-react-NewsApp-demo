import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  } from "react-router-dom";
import Navbar from './components/UI/Navbar/Navbar';
import About from './pages/About';
import New from './pages/New';
import Posts from './pages/Posts';

const App = () => {
  return (
    <Router>
    <div className='app'>
      <Navbar />
        <Routes>

          <Route path= "/" element={<About />}></Route>
          <Route path="/news/" exact element={<Posts />}></Route>
          <Route path="/news/:id" element={<New />}></Route>

        </Routes>
    </div>
  </Router>
  );
}

export default App