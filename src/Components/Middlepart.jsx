import React from 'react'
import girl from "../Images/girl-studying.jpg";
import boy from "../Images/boy-studying.jpg";
import "./MiddlePart.css";
import { MdPhotoCameraFront } from "react-icons/md";
import { FiMic } from "react-icons/fi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { PiWechatLogoFill } from "react-icons/pi";
import { IoExitOutline } from "react-icons/io5";
const Middlepart = () => {
  return (
    <div className='middle-part'>
        <div className='picture'>
            <div className='picture-item'>
                <img alt='girl' src={girl} style={{borderRadius:"30px"}} className="picture-items"/>
                <img src={boy} alt="boy"   className="picture-item1"/>
                <div  className="features">
                    <div  className="icons">
                    <MdPhotoCameraFront className="icon"/>
                    <span className='tools'>Cam</span>
                    </div>
                    <div>
                        <FiMic className="icon"/>
                        <span className='tools'>Mic</span>
                    </div>
                    <div >
                        <FaRegShareFromSquare className="icon"/>
                        <span className='tools'>Share</span>
                    </div>
                    </div>
                    <div className='features2'>
                    <div >
                        <PiWechatLogoFill className="icon"/>
                        <span className='tools'>Chat</span>
                    </div>
                    {/* style={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:"gainsboro"}} */}
                    <div >
                        <IoExitOutline className="icon leave"/>
                        <span className='tools '>Leave</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='youtube'>
      <iframe
       className='youtube'
        src="https://www.youtube.com/embed/watch?v=-eYcaoA2uj4&pp=ygUeYmFzaWMgbWF0aGVtYXRpY3MgbGVhcm5pbmcgMDAx" // Replace YOUR_VIDEO_ID with the actual YouTube video ID
        title="YouTube Video"
        frameBorder="0" // Remove the border around the iframe
        allowFullScreen // Allow fullscreen mode
      ></iframe>
    </div>
    </div>
  )
}

export default Middlepart