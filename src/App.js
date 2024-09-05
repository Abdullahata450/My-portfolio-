import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import { useState } from 'react';
import React from 'react'
import Home from './Components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './Components/About';
import Foter from './Components/Foter';
import Services from './Components/Explore';
import Contact from './Components/Contact';
export default function App() {

  const[mode,changemode]=useState('#FAE7A5')
  const[alert,cahngeAlert]=useState(null)
 
  const makeAlert=(meesage,type)=>{
    cahngeAlert({
        msg:meesage,
        type:type
    })
    setTimeout(() => {
      cahngeAlert(null)
    }, 1500);
  }

  const togglemode=()=>{
 if (mode==='#FAE7A5') {
  changemode('dark')
  document.body.style.background="linear-gradient(to right, #212529, #495057)";
  makeAlert("Change To Dark Mode","secondary")
 }
 else{
  changemode('#FAE7A5')
  document.body.style.background="#FAE7A5";
  makeAlert("Change To Light Mode","secondary")

 }
  }

  return (
    <div>
      <Router>
      
      <Navbar toggle={togglemode} navmode={mode}></Navbar>
      <Alert showAlert={alert}></Alert>
      <Routes>
      <Route path="/" element={ <Home newmode={mode}></Home>}></Route>
      <Route path="about" element={<About newmode={mode}></About>}></Route>
      <Route path='Explore'element={<Services newmode={mode}></Services>} ></Route>
      <Route path='Contact' element={<Contact newmode={mode}></Contact>}></Route>
      </Routes>
      <Foter newmode={mode}></Foter>
    </Router>

    </div>
  )
}

