import { useState, useRef, useEffect, useContext } from 'react'
import EcommerceContext from '../../../Context/Context'
import { IoClose } from "react-icons/io5";
import stop from "../../../assets/Icone/stop.png"
import check1 from "../../../assets/Icone/check1.png"
import check2 from "../../../assets/Icone/check2.png"
import AddToCart3 from "../../../assets/Icone/AddToCart3.png"
import stopwhite from "../../../assets/Icone/stopwhite.png"
import heartwhite from "../../../assets/Icone/heartwhite.png"
import heartbrackwhite from "../../../assets/Icone/heartbrackwhite.png"
const Notifiction = () => {
    let { notification, setNotification,
        newNoti, removeNotification, } = useContext(EcommerceContext)

    function selectImg(type) {
        if (type === "stop") {
            return stop
        }
        else if (type === "check1") {
            return check1
        }
        else if (type === "AddToCart3") {
            return AddToCart3
        }
        else if (type === "stopwhite") {
            return stopwhite
        }
        else if (type === "heartwhite") {
            return heartwhite
        }
        else if (type === "heartbrackwhite") {
            return heartbrackwhite
        }
    }
    // heartbrackwhite
    return (
        <>
            <div className="notificationConatiner">
                {notification.map((not) => (
                    <div key={not.id} className={`notification align-items-center d-flex gap-2 gap-sm-0 ${not.type}`}>
                        <h6 className='mb-0 fontSize7 text-capitalize align-items-center d-flex gap-2'>{not.msg} </h6>

                        <span> <IoClose size={20} onClick={() => removeNotification(not.id)} /></span>
                    </div>
                ))}
            </div>
        </>
    )
}
{/* <img style={{ width: "16px" }} src={selectImg(not.icone)} alt="" /> */ }

export default Notifiction