import React from 'react'
import './App.css'
// import Navbar from './components/Navbar/Navbar'
// import Main from './components/Main/Main'
// import Projects from './components/Projects/Projects'
import { Projects, Main, Navbar, Skills } from './components'

const App = () => {
  return (
    <div>
        <div>
            <Navbar />
            <Main />
        </div>

        <Projects />
        <Skills />
    </div>
  )
}

export default App
