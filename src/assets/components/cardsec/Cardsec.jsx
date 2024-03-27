import React from 'react'
import { Link } from 'react-router-dom'



function Cardsec() {
  return (
    
    <div  data-scroll data-scroll-section  data-scroll-speed='0.4'  className='w-full h-[70vh] backdrop-blur-md flex flex-col justify-center gap-3' >
      <div className='w-full h-[40%]  flex overflow-hidden items-center justify-center gap-4 '>
        <div className=' h-full w-96 bg-slate-200 rounded-lg overflow-hidden'>
          {/* <Link to='./speech'>
          <button>Click Me</button>
          </Link> */}
        </div>
        <div className=' h-full w-60  bg-[#7d56d8] rounded-lg'></div>
        <div className=' h-full w-96 bg-slate-200 rounded-lg'></div>
        <div className=' h-full w-80 bg-[#92cbad] rounded-lg'></div>
      </div>
      <div className='w-full h-[60%] flex overflow-hidden items-center justify-center gap-3 '>
        <div className=' h-full w-[35%] bg-[#ffc50f] rounded-lg'></div>
        <div className=' h-full w-[60%] bg-[#92cbad] rounded-lg'></div>

      </div>
    </div>
    
    
  )
}

export default Cardsec



