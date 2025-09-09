import { useState, useEffect } from 'react'
import { Link } from 'react-router'

import { IoPersonAddOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";

import AlertTopup from './AlertTopup'

const Header = () => {
  const [displayAlert, setDisplayAlert] = useState(false)
  
  const handleLogout = () => {
    displayAlert(true)
  }
  
  return (
    <>
      <div className="px-3 fixed z-20 w-screen top-0 h-16 bg-violet-600 flex items-center justify-between" >
        <div className="px-2 text-white font-['Libertinus_Keyboard'] text-2xl">LMS</div>
        <div className="flex gap-2" >
          <Link to="/viewLead" className="group border-2 border-slate-100 rounded-md flex items-center justify-center gap-2 md:min-h-5 md:min-w-5 p-2 hover:py-1 md:px-4 md:py-1 text-white ease-in-out transition duration-200" >
            <span className="group-hover:flex group-hover:text-sm hidden md:flex transition duration-150 ease-in-out" >Search</span>
            <BsSearch />
          </Link>
          <Link to="/createLead" className="group border-2 border-slate-100 rounded-md flex items-center justify-center gap-2 md:min-h-5 md:min-w-5 p-2 hover:py-1 md:px-4 md:py-1 text-white ease-in-out transition duration-200" >
            <span className="group-hover:flex group-hover:text-sm hidden md:flex transition duration-150 ease-in-out" >Create Lead</span>
            <IoPersonAddOutline />
          </Link>
          <button name="logout" onClick={()=> setDisplayAlert(true)} className="group border-2 border-slate-100 rounded-md flex items-center justify-center gap-2 md:min-h-5 md:min-w-5 p-2 hover:py-1 md:px-4 md:py-1 text-white ease-in-out transition duration-200 md:mr-6" >
            <span className="group-hover:flex group-hover:text-sm hidden md:flex transition duration-150 ease-in-out" >Logout</span>
            <CiLogout />
          </button>
        </div>
      </div>
      <AlertTopup display={displayAlert} message="Do You really want to logout?" link="/" />
    </>
  )
}

export default Header