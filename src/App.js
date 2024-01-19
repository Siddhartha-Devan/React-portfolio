import React from 'react'
import './App.css'
// import Navbar from './components/Navbar/Navbar'
// import Main from './components/Main/Main'
// import Projects from './components/Projects/Projects'
import { Projects, Main, Navbar, Skills, Contact } from './components'

const App = () => {
  return (
    <div>
        <div>
            <Navbar />
            <Main />
        </div>

        <Projects />
        <Skills />
        <Contact />
    </div>
  )
}

export default App
