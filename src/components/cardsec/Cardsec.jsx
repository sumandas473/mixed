import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';




function Cardsec() {
 

  return (
    
    <div  data-scroll data-scroll-section  data-scroll-speed='0.4'  className='w-full h-[70vh] backdrop-blur-md flex flex-col justify-center gap-3' >
      <div className='w-full h-[40%]  flex overflow-hidden items-center justify-center gap-4 '>
        <div className=' h-full w-96 bg-[#fff6e98d] rounded-lg overflow-hidden'>
          <div className='h-[30%] w-full flex items-center justify-around  '>
            <h2 className='font-semibold'>WORKSHOP</h2>
            <h2>Add Events</h2>
            <button className='px-5 py-1 bg-lime-700 rounded-2xl text-white'>Click</button>
          </div>
          <div className='h-[70%] w-full  text-start p-7'>
            <h1 className='text-3xl font-semibold'>Automation </h1>
            <h1 className='text-3xl font-semibold'>Testing Workshop</h1>
            <h3 className='mt-2 font-semibold'>Suman Das</h3>
          </div>

        </div>
        <div className=' h-full w-60  bg-[#7d56d8] rounded-lg'></div>
        <div className=' h-full w-96 bg-slate-200 rounded-lg'></div>
        <div className=' h-full w-80 bg-[#92cbad] rounded-lg'></div>
      </div>
      <div className='w-full h-[60%] flex overflow-hidden items-center justify-center gap-3 '>
        <div className=' h-full w-[35%] bg-[#ffc50f] rounded-lg'></div>
        <div className=' h-full w-[60%]  bg-transparent border rounded-lg overflow-hidden flex flex-wrap justify-center items-end gap-5 shadow-[inset_-2px_-1px_16px_#ffff]'>
          
          <motion.div drag dragConstraints={{left:-130, right:630,top:-290,bottom:0}} className='px-5 py-2 text-white bg-[#216bff] rounded-xl '>
          <h1>HTML</h1>

          </motion.div>
          <motion.div drag dragConstraints={{left:-230, right:550,top:-290,bottom:0}} className='px-5 py-2 text-white bg-[#4c00ff7e] rounded-xl  '>
          <h1>CSS</h1></motion.div>
          <motion.div drag dragConstraints={{left:-320, right:400,top:-290,bottom:0}} className='px-5 py-2 bg-[#661919] rounded-xl text-white flex items-center justify-center   ' >
            <h1>JAVA SCRIPT</h1>
          </motion.div>
          <motion.div drag dragConstraints={{left:-470, right:280,top:-290,bottom:0}} className='px-5 py-2 bg-[#2c691a] rounded-xl text-white flex items-center justify-center ' >
            <h1>REACT JS</h1>
          </motion.div>
          <motion.div drag dragConstraints={{left:-590, right:130,top:-290,bottom:0}} className='px-5 py-2 bg-[#ff3f3f] rounded-xl text-white flex items-center justify-center ' >
            <h1>React Native</h1>
          </motion.div>
        </div>

      </div>
    </div>
    
    
  )
}

export default Cardsec



