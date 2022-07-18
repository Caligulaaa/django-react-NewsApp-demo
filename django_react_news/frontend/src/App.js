import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  } from "react-router-dom";
import Navbar from './components/UI/Navbar/Navbar';
import About from './pages/About';
import LoginPage from './pages/LoginPage';
import New from './pages/New';
import NewPost from './pages/NewPost';
import Posts from './pages/Posts';
import { AuthContext } from './utils/context';
import PrivateRoute from './utils/PrivateRoute';



const App = () => {
  const [isAuth, setIsAuth] = useState(null);
  
  useEffect(()=> {
    if(localStorage.getItem('authToken')){
      setIsAuth(true)
    }
  },[])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,


    }}>
    <Router>
    <div className='app'>
      <Navbar />
        <Routes>

          <Route path="/" element={<About />}></Route>
          <Route path='/news/' element={<Posts/>}/>
          <Route path="/news/:id" element={<New />}></Route>
          <Route path="/login/" element={<LoginPage />}></Route>

          <Route path="/" element={<PrivateRoute />} >
            <Route path="/news/add_post" element={<NewPost />}></Route>
          </Route>
          

        </Routes>
    </div>
  </Router>
  </AuthContext.Provider>
  );
}

export default App