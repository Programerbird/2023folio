import './App.css'
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'
import Project from './components/Project';
import ContactMe from './components/ContactMe'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route  path='/skills' element={<Skills/>}/>
          <Route  path='/projects' element={<Project/>}/>
          <Route  path='/contactme' element={<ContactMe/>}/>
          <Route  path='/aboutme' element={<AboutMe/>}/>
        </Routes>
    </Router>
  )
}

export default App
