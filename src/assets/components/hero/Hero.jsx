import React from "react";

// import { motion } from "framer-motion";
import video1 from '../../Video/sssss.mp4'

function Hero() {
  return (
    
    
    <div data-scroll data-scroll-section  data-scroll-speed='-0.9' className="hero h-auto w-full text-[#dedddd] flex flex-col justify-evenly py-24">
      <div className="flex h-1/3 w-full items-center justify-center gap-3  capitalize ">
        <h1 className="text-5xl font-semibold leading-tight text-center md:text-9xl">
          build
        </h1>
        <div className="h-24  w-72 bg-[#7d56d8] rounded-lg overflow-hidden"><video  src={video1} autoPlay muted loop className=" h-full w-full object-cover "></video></div>
        <h1 className="text-5xl font-semibold leading-tight text-center md:text-9xl">
          your
        </h1>
      </div>
      <div className=" h-1/3 w-full flex items-center  justify-center gap-3  capitalize ">
        <div className="h-24 w-28 bg-[#92cbad] rounded-xl overflow-hidden"><img src="../../Video/cateye.gif" alt="logo"  className="h-full w-full object-cover"/></div>
        <h1 className="text-5xl font-semibold leading-tight text-center md:text-9xl">
          Skills
        </h1>
        <div className="h-24 w-36 bg-[#ffc50f] rounded-xl flex items-center">
          <div className="h-[80%] w-[55%] rounded-full bg-[#5c2c2c6f] ml-2 flex items-center justify-center">
            <div className="h-[40%] w-[40%] rounded-full bg-[#fac917] "></div>
          </div>
         
        </div>
        <h1 className="text-5xl font-semibold leading-tight text-center md:text-9xl">
         online
        </h1>
      </div>
      <div className="text-center px-80 mt-7">
        
        <span>
          Lorem ipsum accusamuNecessitatibus quam amet ipsa corrupti ipsum
          
        </span>
        <span>Lorem ipsum accusamuNecessitatibus quam amet ipsa corrupti ipsum</span>
      </div>
    </div>
    
  );
}

export default Hero;
