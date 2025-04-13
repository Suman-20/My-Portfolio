import React from 'react'
import Navber from './components/Navber'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Skill from  './components/Skill'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast';

function App() {
  

  return (
      <>
      <div>

       <Navber/>
       <Home/>
       <About/>
       <Project/>
       <Skill/>
       <Contact/>
       <Footer/>
      </div>
      <Toaster />
      </>
      
  )
}

export default App
