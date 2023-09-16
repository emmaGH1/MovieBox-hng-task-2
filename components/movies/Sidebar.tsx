import { sidebarLinks } from "@/constants";
import Logo from "../shared/Logo";
import Link from "next/link";
import { createElement } from "react";
import { BiLogIn } from 'react-icons/bi'

const Sidebar = () => {
  const navLinks = sidebarLinks()
  return (
    <div className="rounded-r-[50px] border border-black h-screen flex flex-col">
      <div className="mt-5 mb-3 ml-3">
        <Logo />
      </div>
      <div className="bg">
        {navLinks.map((each) => {
          const {label, icon} = each
          if (label === 'Movies') {
            return (
              <div className="bg-[#be123c]/10">
                <Link href='/' className="flex px-1 py-3 items-center w-4/5 mx-auto my-4 text-rose-700 font-bold">
                <div className="text-lg mr-3 ">{createElement(icon)}</div>
                <div>{label}</div>
                </Link>
              </div>
            )
          }
          
          return (
            <div className=""> 
              <div className="flex px-1 py-3 items-center w-4/5 mx-auto my-4 ">
                <div className="text-lg mr-3">{createElement(icon)}</div>
                <div>{label}</div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex flex-col text-sm items-center w-4/5 mx-auto border border-rose-700 rounded-md bg-[#be123c]/5 text-center">
        <div className="font-bold mt-2">Play movie quizzes and earn free tickets</div>
        <div>50k people are playing now</div>
        <div>Start Playing</div>
      </div>
      <div className=""> 
        <div className="flex px-1 py-3 items-center w-4/5 mx-auto my-4 ">
          <div className="text-lg mr-3">
            <BiLogIn />
          </div>
          <div>Log out</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;