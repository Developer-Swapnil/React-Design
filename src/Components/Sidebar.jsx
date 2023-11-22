import React from 'react'
import "./Sidebar.css";
// import {menubar} from "react-icons"
import { CgMenuLeft } from "react-icons/cg";
import { MdNotificationAdd } from "react-icons/md";
import { IoStopwatchOutline } from "react-icons/io5";
import { IoCheckboxOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlineGraphicEq } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import logo from '../Images/whitehatjr.com.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <img className="logo" src={logo} alt='logo' />
      <CgMenuLeft size={30} />
      <MdNotificationAdd size={30} />
      <IoStopwatchOutline size={30} />
      <IoCheckboxOutline size={30} />
      <FaRegEye size={30} />
      <MdPeopleAlt size={30} />
      <MdOutlineGraphicEq size={30} />
      <CgProfile size={30} />
    </div>
  )
}

export default Sidebar