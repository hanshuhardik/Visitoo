import React from 'react'
import { motion } from "framer-motion"
import bgimg from "../assets/image/Rectangle 26.png";
import Vetor from "../assets/image/Vector.png"
import taj from "../assets/image/taj.png"
import fall from "../assets/image/fall.png"
import church from "../assets/image/church.png"
import Group from "../assets/image/Group.png"
import Button from '@mui/material/Button';
import { HiOutlineMail } from "react-icons/hi";
import { TbPasswordFingerprint } from "react-icons/tb";
import "./Login.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{x:-100,opacity:0}}
            transition={{duration:0.5,delay:0.2}}
            className="w-full lg:w-1/2 lg:p-0">
            <div className="flex items justify-center">
                <img className="bg-img w-full h-screen"  src={bgimg} alt="about"/>
            </div>
            <div className='bg-text flex items justify-center'>
            <img className=""  src={Group} alt="about"/>
            </div>
            </motion.div>
            <div className="w-full relative lg:w-1/2">
            <motion.div
            whileInView={{y:0,opacity:1}}
            initial={{y:100,opacity:0}}
            transition={{duration:0.5,delay:0.2}}
            >
                <div className='content-end	r-0'>
                <img 
                
                className='fixed mt-5 right-0' src={Vetor} alt="Vector"/>

                </div>
                
                <div className="flex justify-center ">
                <p className="mt-20 text-center font-bold bg-gradient-to-r from-pink-400 via-slate-500 to-purple-700 bg-clip-text text-3xl trcking-tight text-transparent text-4xl">Welcome </p>   
                </div>
                <p  className='text-center text-slate-400'>login to explore!</p>
            </motion.div>
            <div className='flex justify-center mt-5'>
            <div className=' flex flex-col'>
                
                <div className='flex justify-inline m-2 '>
                <span className='text-4xl mt-3 mr-3 text-blue-500'><HiOutlineMail/></span>
                <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ><TextField
          required
          id="outlined-required"
          label="UserName"
          defaultValue="username"
        /></Box>
                </div>  
                <div className='flex justify-inline m-2 '>
                <span className='text-4xl mt-3 mr-3  text-blue-500'><TbPasswordFingerprint/></span>
                <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ><TextField
    required
          id="outlined-password-input"
          label="Password"
          type="password"
          
        /></Box>
                </div>
                <div className='flex justify-center m-2'>
                {/* <button className='button w-40 mt-1 h-auto rounded-xl bg-blue-500 text-white font-bold text-3xl'  type='button'>
               
                </button> */}
                 <Button  variant="contained" size="large">
          Login
        </Button>
                </div>
                <Link to='/Register' className='text-xs flex justify-center font-thin text-slate-400 '>don't have an account?<span className='cursor-pointer hover:text-blue-600'>Register Now</span></Link>
                
            </div>
            
            </div>
            <div className='content-end align-bottom 	r-0'>
                <img className='absolute mt-5 left-50 bottom-0 flex justify-content w-23 h-28' src={taj} alt="taj"/>
                <img className='absolute mt-5 right-10 bottom-0 flex justify-content w-23 h-28' src={fall}/>
                <img className='absolute mt-5 right-0 bottom-0 flex justify-content w-23 h-28' src={church}/>
                </div>
            </div>
            
            
            </div>
            
  )
}

export default Login