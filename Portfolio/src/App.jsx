import { useState } from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <NavBar/>
      <Main/>
      <Work/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
