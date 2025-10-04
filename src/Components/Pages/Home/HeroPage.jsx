import { useContext } from "react"
import img1 from "../../../assets/HeroImgs/1.jpg"
import img2 from "../../../assets/HeroImgs/2.jpg"
import img3 from "../../../assets/HeroImgs/3.jpg"
import img4 from "../../../assets/HeroImgs/4.jpg"
// import img4 from "../../../assets/HeroImgs"
import "./Hero.css"
import EcommerceContext from "../../../Context/Context"
import { Link, NavLink } from 'react-router-dom';


const HeroPage = () => {

    let { randomProduct, phoneDatas, laptopDatas, tshirtsDatas, smartWatchData } = useContext(EcommerceContext)

    return (
        <>
            <div className="hero paddingTop">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="d-none carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Link to={`shirt`}>
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2025/Jupiter/GW/Hero/Event/PC/1-2._CB799216726_.jpg" className="d-block w-100" alt="..." />
                            </Link>
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>

                        <div className="carousel-item">
                            <Link to={`phone`}>
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/Jup25/GW/D304708860_IN_Jup25_Samsung_M16PC_PB_LIVE_Lifestyle_3000x1200._CB800955375_.jpg" className="d-block w-100" alt="..." />
                            </Link>
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>


                        <div className="carousel-item">
                            <Link to={`shoe`}>
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/Jupiter/ATF/Unrec/PC/2090537951._CB800972877_.jpg" className="d-block w-100" alt="..." />
                            </Link>
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <Link to={`sport`}>
                                <img src={img4} className="d-block w-100" alt="..." />
                            </Link>
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <Link to={`phone`}>
                                <img src={img2} className="d-block w-100" alt="..." />
                            </Link>
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>

                        <div className="carousel-item">
                            <Link to={`tshirt`}>
                                <img src={img3} className="d-block w-100" alt="..." />
                            </Link>
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="mx-auto containe main-container row align-items-center d-none d-sm-flex">

                    <div className="col-6 col-sm-3 my-2 p-0 p-1">
                        <div className="main-box mx-sm-3 p-0">
                            <h4 className="px-0 text-center fw-bolder pt-3 mb-0">Smart Picks</h4>
                            <div className="row justify-content-between">

                                {randomProduct(phoneDatas, 4).map((data, i) => (
                                    <div key={i} className="col-6">
                                        <div className="box">
                                            <Link to={`${data.catergory.toLowerCase()}/${data.productNo}/details`} >
                                                <img src={data.mainImg} alt="" />
                                                <p className="m-0">{data.ditails.substring(0, 25)}...</p>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link to={`phone`}>
                                <span className="text-primary px-2">See all deals</span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-6 col-sm-3 my-2 p-0 p-1">
                        <div className="main-box mx-sm-3 p-0">
                            <h4 className="px-0 text-center fw-bolder  pt-3 mb-0">Premium Collection</h4>
                            <div className="row justify-content-between">

                                {randomProduct(tshirtsDatas, 4).map((data, i) => (
                                    <div key={i} className="col-6">
                                        <div className="box">
                                            <Link to={`${data.catergory.toLowerCase()}/${data.productNo}/details`} >
                                                <img src={data.mainImg} alt="" />
                                                <p className="m-0">{data.ditails.substring(0, 25)}...</p>
                                            </Link>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            <Link to={`tshirt`}>
                                <span className="text-primary px-2">See all deals</span>
                            </Link>
                        </div>
                    </div>


                    <div className="col-6 col-sm-3 my-2 p-0 p-1">
                        <div className="main-box mx-sm-3 p-0">
                            <h4 className="px-0 text-center fw-bolder  pt-3 mb-0">Work & Play Deals</h4>
                            <div className="row justify-content-between">

                                {randomProduct(laptopDatas, 4).map((data, i) => (
                                    <div key={i} className="col-6">
                                        <div className="box">
                                            <Link to={`${data.catergory.toLowerCase()}/${data.productNo}/details`} >
                                                <img src={data.mainImg} alt="" />
                                                <p className="m-0">{data.ditails.substring(0, 25)}...</p>
                                            </Link>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <Link to={`laptop`}>
                                <span className="text-primary px-2">See all deals</span>
                            </Link>
                        </div>
                    </div>


                    <div className="col-6 col-sm-3 my-2 p-0 p-1">
                        <div className="main-box mx-sm-3 p-0">
                            <h4 className="px-0 text-center fw-bolder  pt-3 mb-0">Classic Collection</h4>
                            <div className="row justify-content-between">

                                {randomProduct(smartWatchData, 4).map((data, i) => (
                                    <div key={i} className="col-6">
                                        <div className="box">
                                            <Link to={`${data.catergory.toLowerCase()}/${data.productNo}/details`} >
                                                <img src={data.mainImg} alt="" />
                                                <p className="m-0">{data.ditails.substring(0, 25)}...</p>
                                            </Link>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <Link to={`smartwatch`}>
                                <span className="text-primary px-2">See all deals</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HeroPage