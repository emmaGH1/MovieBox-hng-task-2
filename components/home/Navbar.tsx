import Image from "next/image";
import Link from "next/link";

import { AiOutlineSearch } from 'react-icons/ai'
import { FaEquals } from 'react-icons/fa'
import Logo from "../shared/Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between w-[90%] lg:w-4/5 mx-auto mt-5 items-center lg:mt-7 relative z-10">
      <Logo />

      <div className="flex items-center lg:hidden">
          <div>
            <AiOutlineSearch className='w-7 h-7 mr-3 bg-rose-700 rounded-full p-1' />
          </div>
          <div className="flex items-center">
            <Link href='#sign-in' className="mr-3">Sign In</Link>
          </div>
      </div>

      <div className="w-[65%] lg:flex justify-between items-center hidden">
        <div className="relative">
          <input type="text" className="w-[400px] bg-transparent border border-white py-2 px-2 rounded-sm placeholder:px-1" placeholder="What do you want to watch?"/>
          <AiOutlineSearch className='absolute right-1 top-2 w-7 h-7 p-1' />
        </div>
        <div className="flex items-center ">
            <div className="mr-5"> 
              Sign In
            </div>
            <FaEquals className='w-9 h-9 bg-rose-700 rounded-full p-2' />
          </div>
      </div>
    </div>
  );
};

export default Navbar;