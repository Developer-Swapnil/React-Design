import React, { useEffect, useState } from 'react'
import "./Navigationbar.css";
import { TfiBlackboard } from "react-icons/tfi";
import { GoVideo } from "react-icons/go";
import { RiSlideshowLine } from "react-icons/ri";
import { IoDocumentSharp } from "react-icons/io5";
import { GrDocumentVideo } from "react-icons/gr";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FcOnlineSupport } from "react-icons/fc";

import { SiGoogleclassroom } from "react-icons/si";
import Middlepart from './Middlepart';


const Navigationbar = () => {
    // const [activeLinks,setActiveLinks]=useState("")
    const [activeItem, setActiveItem] = useState(2);

    const handleItemClick = (index) => {
        setTimeout(() => {
            setActiveItem(index);
          }, 300);    };
          useEffect(() => {
            // Cleanup effect to prevent delayed state updates if the component unmounts
            return () => clearTimeout();
          }, [activeItem]);
    
  return (
    <div className='navigation-parent'>
        <div className='top'>
            <div className='top1'>
                <MdOutlineArrowBackIosNew  className='icon1'/>
                <h5 className='head1'>Basic Mathemetics 101</h5>
            </div>
            <div className='top2'>
                <BiSolidPhoneCall className='icon2'/>
                <p className='head2'>Call teacher</p>
                <FcOnlineSupport className='icon3'/>
                <p className='head3' >Support</p>
            </div> 
        </div>

    <div className='navigation'>
      <div className={`items ${activeItem === 0 ? 'active-link' : ''}`} onClick={() => handleItemClick(0)}>
        <SiGoogleclassroom size={20} style={{paddingRight:"10px"}}/>
        <h5>Classroom</h5>
      </div>
      <div className={`items ${activeItem === 1 ? 'active-link' : ''}`} onClick={() => handleItemClick(1)}>
        <TfiBlackboard size={20} style={{paddingRight:"10px"}}/>
        <h5>Whiteboard</h5>
      </div>
      <div className={`items ${activeItem === 2 ? 'active-link' : ''}`} onClick={() => handleItemClick(2)}>
        <GoVideo size={20} style={{paddingRight:"10px"}}/>
        <h5>Videos</h5>
      </div>
      <div className={`items ${activeItem === 3 ? 'active-link' : ''}`} onClick={() => handleItemClick(3)}>
        <RiSlideshowLine size={20} style={{paddingRight:"10px"}}/>
        <h5>SlideShow</h5>
      </div>
      <div className={`items ${activeItem === 4 ? 'active-link' : ''}`} onClick={() => handleItemClick(4)}>
        <IoDocumentSharp size={20} style={{paddingRight:"10px"}}/>
        <h5>Document</h5>
      </div>
      <div className={`items ${activeItem === 5 ? 'active-link' : ''}`} onClick={() => handleItemClick(5)}>
        <GrDocumentVideo size={20} style={{paddingRight:"10px"}}/>
        <h5>Doc.Cam</h5>
      </div>
    </div>
    {activeItem===2?<Middlepart/>:<></>}
    </div>
  )
}

export default Navigationbar