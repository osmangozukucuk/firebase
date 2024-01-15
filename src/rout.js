import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Sign_up from './Sign_up'
import Login from './login'
const Rout = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Sign_up/>}/>
        <Route path="/signin" element={<Login/>}/>

    </Routes>
    </>
  )
}

export default Rout