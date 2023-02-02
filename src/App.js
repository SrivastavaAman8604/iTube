import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './component/Header.jsx';
import Home from './component/Home.jsx';
import Footer from './component/Footer.jsx';
import Videos from './component/Videos.jsx';
import Upload from './component/Upload.jsx';
import Login from './component/Login.jsx';
import SignUp from './component/SignUp.jsx';

function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/videos' element={<Videos/>}/>
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
