import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Silder from './Components/Silder'
import Theameset from './Components/Theameset'
import Userlist from './Components/Userlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Silder />
    <Theameset />
    <Userlist />
     </>
  )
}

export default App
