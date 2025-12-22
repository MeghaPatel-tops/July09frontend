import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Silder from './Components/Silder'
import Theameset from './Components/Theameset'
import Userlist from './Components/Userlist'
import Product from './Components/Product'
import Post from './Components/Post'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import Tespost from './Components/Tespost'
import Counter from './Components/Counter'
import FilterPost from './Components/FilterPost'

import PostContext from './Components/PostContext'


const queryClinet = new QueryClient();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar />
    <Silder />
    <Theameset />
    <Userlist /> */}
     
     {/* <Product /> */}
     {/* <Post /> */}
     {/* <QueryClientProvider client={queryClinet}>
          <Tespost />
     </QueryClientProvider> */}
     {/* <Counter /> */}
     <FilterPost />
     </>
  )
}

export default App
