import React from 'react'
import Rout from './rout'
import {BrowserRouter} from 'react-router-dom'


const App = () => {
  return (
    <div>
    <BrowserRouter> 
         <Rout />
    </BrowserRouter>
    </div>
  )
}

export default App