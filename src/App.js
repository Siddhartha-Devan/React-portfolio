import React from 'react'
import './App.css'
// import Navbar from './components/Navbar/Navbar'
// import Main from './components/Main/Main'
// import Projects from './components/Projects/Projects'
import { Projects, Main, Navbar } from './components'

const App = () => {
  return (
    <div>
        <div>
            <Navbar />
            <Main />
        </div>

        <Projects />
    </div>
  )
}

export default App
