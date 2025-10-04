import { useContext } from "react"
import img1 from "../../../assets/HeroImgs/1.jpg"
import img2 from "../../../assets/HeroImgs/2.jpg"
import img3 from "../../../assets/HeroImgs/3.jpg"
import img4 from "../../../assets/HeroImgs/4.jpg"
// import img4 from "../../../assets/HeroImgs"
import "./Hero.css"
import EcommerceContext from "../../../Context/Context"
import { Link, NavLink } from 'react-router-dom';
import { Carousel } from "react-bootstrap";


const HeroPage = () => {

    let { randomProduct, phoneDatas, laptopDatas, tshirtsDatas, smartWatchData } = useContext(EcommerceContext)

    return (
        <>
            <Carousel.Item>
                <Link to={`shirt`}>
                    <img className="d-block w-100" src={"https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2025/Jupiter/GW/Hero/Event/PC/1-2._CB799216726_.jpg"} alt="First slide" />
                </Link>
                <Link to={`phone`}>
                    <img className="d-block w-100" src={"https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/Jup25/GW/D304708860_IN_Jup25_Samsung_M16PC_PB_LIVE_Lifestyle_3000x1200._CB800955375_.jpg"} alt="First slide" />
                </Link>
                <Link to={`shoe`}>
                    <img className="d-block w-100" src={"https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/Jupiter/ATF/Unrec/PC/2090537951._CB800972877_.jpg"} alt="First slide" />
                </Link>
                <Link to={`sport`}>
                    <img className="d-block w-100" src={img4} alt="First slide" />
                </Link>
                <Link to={`phone`}>
                    <img className="d-block w-100" src={img2} alt="First slide" />
                </Link>
                <Link to={`tshirt`}>
                    <img className="d-block w-100" src={img3} alt="First slide" />
                </Link>

            </Carousel.Item>

        </>
    )
}

export default HeroPage