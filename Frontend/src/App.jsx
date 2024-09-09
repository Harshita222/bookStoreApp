import React from 'react'
import Home from "./home/Home"
import Courses from "./courses/Courses"
import Contact from "./contact/Contact"
import {Routes,Route} from "react-router-dom"
import Signup from './components/Signup'
function App() {
  return (
    <>
    <div className= "dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Courses/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path ="/contact" element ={<Contact/>} />
    </Routes>
    </div>
    </>
  )
}

export default App
