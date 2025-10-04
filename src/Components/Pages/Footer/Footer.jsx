import { Link } from "react-router-dom"
import dealIcone from "../../../assets/Icone/Footer/Deal2.png"
import FreeDelivery from "../../../assets/Icone/Footer/FreeDelivery.png"
import MoneyExchange from "../../../assets/Icone/Footer/MoneyExchange.png"
import logoIcone from "../../../assets/Logo/logo.png"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
    return (
        <div className='bg-dark '>
            <div className="container text-light">
                <div className='row p-2 p-md-4 broderBottom justify-content-center align-items-center'>

                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <div className='p-0 d-flex align-items-center px-0 gap-3 align-items-center'>
                            <div className="footerIcone">
                                <img className="imgWidthAndHeight" src={dealIcone} alt="dealIcone" />
                            </div>
                            <div>
                                <h6 className="mb-1 fw-bold text-uppercase">Best Prices & Deals</h6>
                                <p className="m-0 fw-light">Don’t miss our daily amazing deals and prices</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <div className='p-0 d-flex align-items-center px-0 gap-3 align-items-center'>
                            <div className="footerIcone">
                                <img className="imgWidthAndHeight" src={MoneyExchange} alt="MoneyExchange" />
                            </div>
                            <div>
                                <h6 className="mb-1 fw-bold text-uppercase">Refundable</h6>
                                <p className="m-0 fw-light">If your items have damage we agree to refund it</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <div className='p-0 d-flex align-items-center px-0 gap-3 align-items-center'>
                            <div className="footerIcone">
                                <img className="imgWidthAndHeight" src={FreeDelivery} alt="FreeDelivery" />
                            </div>
                            <div>
                                <h6 className="mb-1 fw-bold text-uppercase">Free delivery</h6>
                                <p className="m-0 fw-light">Do purchase over 500 and get free delivery anywhere</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='row p-4  broderBottom justify-content-center'>
                    <div className="col-12 col-md-4 p-0">
                        <Link to="/">
                            <div className="d-flex mb-2 align-items-center gap-3 mb-2">

                                <div className="footerLogoIcone">
                                    <img className="imgWidthAndHeight" src={logoIcone} alt="logoIcone" />
                                </div>

                                <div>
                                    <h6 className="fs-4 m-0">E Commerce</h6>
                                </div>
                            </div>
                        </Link>
                        <div>
                            <p className="d-flex align-items-center gap-2">
                                <span> <FaLocationDot /> </span>
                                <span className="text-bolder">Address</span>
                                <span className="text-secondary">Chrompet Channai</span>
                            </p>

                            <p className="d-flex align-items-center gap-2">
                                <span> <FaPhoneAlt /> </span>
                                <span className="text-bolder">Call us:</span>
                                <span className="text-secondary">+91 9176017127</span>
                            </p>

                            <p className="d-flex align-items-center gap-2">
                                <span> <IoIosMail /> </span>
                                <span className="text-bolder">Email</span>
                                <span className="text-secondary"> rhvishnushankar@gmail.com</span>
                            </p>


                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 p-0">
                        <h3 className="mb-3">Features</h3>
                        <p className="text-secondary"><Link to={"/addtocart"}>Add To Cart</Link></p>
                        <p className="text-secondary"><Link to={"/likelist"}>Whish List</Link></p>
                        <p className="text-secondary"><Link to={"/shoe"}>Filter Products</Link></p>
                        <p className="text-secondary"><Link to={"/contact"}>Direct mail</Link></p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 p-0">
                        <h3 className="mb-3">Useful links</h3>
                        <p className="text-secondary"><Link to={"/"}>Home Page</Link></p>
                        <p className="text-secondary"><Link to={"/phone"}>Phone Products</Link></p>
                        <p className="text-secondary"><Link to={"/shirt"}>Shirt Products</Link></p>
                        <p className="text-secondary"><Link to={"/tv"}>tv Products</Link></p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2 p-0">
                        <h3 className="mb-3">Help Center</h3>
                        <p className="text-secondary"><Link to={"/contact"}>Conact</Link></p>
                        <p className="text-secondary">Payments</p>
                        <p className="text-secondary">Refund</p>
                        <p className="text-secondary">Shipping</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer