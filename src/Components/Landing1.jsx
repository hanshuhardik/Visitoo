import React from 'react'
import aboutImg from "../assets/landing.png"
import Button from '@mui/material/Button';
import { motion } from "framer-motion"
const Landing1 = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{x:-100,opacity:0}}
            transition={{duration:0.5,delay:0.2}}
            className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="rounded-2xl" width={400} height={350} src={aboutImg} alt="about"/>
            </div>
            </motion.div>
            <div
            
            
            
            className="w-full lg:w-1/2">
                <motion.div 
                whileInView={{x:0,opacity:1}}
                initial={{x:100,opacity:0}}
                transition={{duration:0.5}}
                className='flex justify-center text-4xl font-bold'>
                <h1>Travel any Corner <br/> of the City  With Us</h1>
                </motion.div>
                <motion.div
                whileInView={{x:0,opacity:1}}
                initial={{x:100,opacity:0}}
                transition={{duration:0.7,delay:1}}
                className="flex justify-center lg:justify-start">
                    
                <p className="my-2 py-6  max-w-xl text-xl">Travelling is an amazing way to learn a lot of things in life. 
                    A lot of people around the world travel every year to many places. Moreover, it is important 
                    to travel to humans. Some travel to learn more while some travel
                    to take a break from their life.<br/><br/>
                    “One of the great benefits of travel is meeting new people and coming
                     into contact with different points of view,” 
                    says <span className='font-semibold'>Pauline Frommer</span> , travel expert and radio host.
                    <br/><br/>
                    Would you explore nature paradise in the world, let's find the best destination in world with us.
                </p>

                </motion.div>
<motion.div
whileInView={{x:0,opacity:1}}
initial={{x:100,opacity:0}}
transition={{duration:0.7,delay:1.2}}
>
<Button  variant="contained" size="large">
          Contact Us
        </Button>
</motion.div>

            </div>
        </div>
    </div>

  )
}

export default Landing1