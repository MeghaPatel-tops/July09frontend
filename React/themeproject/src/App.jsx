import { useState ,useContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import GrandParent from './GrandParent'
import { CompanyContext } from './Company'
import Home from './Home'
import { ThemeProvide ,ThemeContext} from './Theme'

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
      {/* <CompanyContext.Provider value={"Tops Technology"}>
            <GrandParent />
      </CompanyContext.Provider> */}
     <ThemeProvide>
         <Home />
     </ThemeProvide>
    </>
  )
}

export default App
