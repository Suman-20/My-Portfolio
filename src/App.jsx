import React  from "react";

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
      <div className='bg-white dark:bg-[#0a192f] transition-colors duration-300 '>

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


// import React, { useState, useEffect } from "react";
// import Navber from './components/Navber'
// import './App.css'
// import Home from './components/Home'
// import About from './components/About'
// import Project from './components/Project'
// import Skill from  './components/Skill'
// import Footer from './components/Footer'
// import Contact from './components/Contact'
// import { Toaster } from 'react-hot-toast';

// function App() {
//   const [theme, setTheme] = useState("light");

//   // Theme apply aur save in localStorage
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if(savedTheme) setTheme(savedTheme);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//     if(theme === 'dark'){
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [theme]);

//   return (
//     <>
//       <div className='bg-white dark:bg-[#0a192f] transition-colors duration-300 min-h-screen'>
//         <Navber theme={theme} setTheme={setTheme}/>
//         <Home/>
//         <About/>
//         <Project/>
//         <Skill/>
//         <Contact/>
//         <Footer/>
//       </div>
//       <Toaster />
//     </>
//   )
// }

// export default App;

