import React from "react";
import Logo2 from '../../Video/Marlou Faure.gif'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="flex h-12 w-full text-white select-none fixed ">
      <div className="w-2/3 h-full flex items-center gap-2">
        <h1 className="ml-6 font-semibold text-lg">SUMAN</h1>
        <div className="w-[5%] h-[50%] bg-slate-50 rounded-xl overflow-hidden">
          <img
            src={Logo2}
            alt="logo"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="w-1/3 h-full flex items-center justify-center capitalize font-light ">
        <Link to='/home'>
        <h1 className="px-6 py-1 rounded-md hover:bg-[#7d56d8] duration-150 cursor-pointer ">
          home
        </h1>
        </Link>
        
        <h1 className="px-5 py-1 rounded-md hover:bg-[#7d56d8] duration-150 cursor-pointer">
          about
        </h1>
        <h1 className="px-5 py-1 rounded-md hover:bg-[#7d56d8] duration-150 cursor-pointer">
          process
        </h1>
        <h1 className="px-5 py-1 rounded-md hover:bg-[#7d56d8] duration-150 cursor-pointer">
          contact
        </h1>
        <h1 className="px-5 py-1 rounded-md hover:bg-[#7d56d8] duration-150 cursor-pointer">
          get started
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
