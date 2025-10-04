import React, { useCallback, useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { IoMdSend } from "react-icons/io";
// import Navbar from './Navbar'
import Navbar from "../../Navbar"
import "./Contact.css"
import axios from 'axios';
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import EcommerceContext from '../../../Context/Context';
import Notifiction from '../../Pages/Notification/Notifiction';


const Contact = () => {

  let { newNoti } = useContext(EcommerceContext)

  let [userName, setUserName] = useState("")
  let [userEmail, setUserEmail] = useState("")
  let [userMsg, setUserMsg] = useState("")

  async function sendEmail(e) {
    e.preventDefault();
    console.log(userName, userEmail, userMsg);

    let serviceId = "service_rog7sds";
    let templateId = "template_3zbc7gp";
    let publicKey = "rFwoyScnDdUuygMJm";

    let templateParams = {
      from_name: userName,
      from_email: userEmail,
      to_name: "VS E-commerce",
      message: userMsg,
    };

    let data = {
      service_id: 'service_rog7sds',
      template_id: 'template_3zbc7gp',
      user_id: 'rFwoyScnDdUuygMJm',
      template_params: {
        from_name: userName,
        email: userEmail,
        site_title: "VS E-commerce",
        message: userMsg,
      }
    };


    if (userEmail.includes("@gmail")) {
      if (userName !== "" && userEmail !== "" && userMsg !== "") {


        try {
          let rep = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data,
            {
              headers: {
                "Content-Type": "application/json"
              }
            }
          );

          console.log("EmailJS response:", rep.data);
          // alert("Message sent ✅");
          newNoti("successfully Message Sent", "greenBtnColor")

          // Clear inputs
          setUserName("");
          setUserEmail("");
          setUserMsg("");
        } catch (error) {
          console.error("Email send failed:", error);
          // alert("Failed to send ❌");
          newNoti("Failed to send ", "redBtnColor")

        }

      }
      else {
        // alert("Plese Enter Vaild Text")
        newNoti("Plese Enter Vaild Email", "redBtnColor")
      }
    }
    else {
      // alert("Plese Enter Vaild Email")
      newNoti("Plese Enter Vaild Text","redBtnColor")

    }


  }





  return (
    <>
      <Navbar />
      <div className='MainContactContainer paddingTop'>
        <div className='contactBg'></div>
        <div className='bg--black'></div>
        <div className='contactBackGround pt-3 pt-sm-0 container mx-auto contactContainer row  align-items-sm-center'>
          <div className="col-sm-6">
            <h1 className='fw-blod py-5 contactTextHeader'>Let's Get In Touch</h1>
            <div className="row mt-3">
              <div className='col-6'>
                <Link className='d-flex gap-2' to="https://maps.app.goo.gl/DzVeiuSdZm721Jwd7">
                  <span><MdLocationOn color='white' size={20} /></span>
                  <p>Nagappa Nagar, Chromepet, Chennai,Tamil Nadu</p>
                </Link>
              </div>
              <div className='col-6 d-flex gap-2 p-0 px-sm-2 '>
                <span><FaPhoneAlt /></span>
                <p className='m-0 pt-1'>+91 9176017127</p>
              </div>
            </div>

            <div className="row mt-3">
              <div className='col-6 px-2 d-flex gap-2 p-0 px-sm-2 align-items-center'>
                <span><MdEmail color='white' size={20} /></span>
                <p className='m-0'>rhvishnushankar@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 my-0 my-sm-5 py-5 pt-sm-0">
            <form className='contactForm' onSubmit={(e) => sendEmail(e)}>
              <div>
                <div>
                  <label htmlFor="UserName">User Name</label>
                  <input className='my-box' type="text" name="UserName" onChange={(e) => setUserName(e.target.value)} value={userName} />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} />
                </div>
                <div>
                  <label htmlFor="msg">Massage</label>
                  <textarea name="msg" onChange={(e) => setUserMsg(e.target.value)} value={userMsg}></textarea>
                </div>
              </div>
              <button className='d-flex align-items-sm-center justify-content-center gap-2'>Submit <IoMdSend /></button>
            </form>
          </div>
        </div>
      </div>
      <Notifiction />
    </>
  )
}

export default Contact