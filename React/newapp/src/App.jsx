import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ABOUT from './components/ABOUT.JSX'
import Home from './components/Home'
import User from './components/User'
import Counter from './components/counter'
import Formexample from './components/Formexample'
import CssExample from './components/CssExample'
import Flexbox from './components/Flexbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home />
     <ABOUT />
     <User  user={{uname:'megha',email:'m@gmail.com'}}/>
     <Counter />
     <Formexample /> */}
     <CssExample />
     <Flexbox />
    </>
  )
}

export default App
