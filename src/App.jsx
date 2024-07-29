import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Login from './Components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-indigo-200 w-full h-full'>
      {/* <Navbar/> */}
      <Login/>
    </div>
  )
}

export default App
