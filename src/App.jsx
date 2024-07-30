import { useState } from 'react'
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Login from "./Components/Login";
import Register from './Components/Register';
import Landing from './Components/Landing';
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-violet-200 w-full h-full'>
     
     <BrowserRouter>
     <Routes>
     <Route path="/"element={<Landing/>}/>
      <Route path="/Login"element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
     </Routes>
     </BrowserRouter>
 
    </div>
  )
}

export default App
