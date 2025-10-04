import { useContext, useState,useEffect } from 'react'
import EcommerceContext from '../Context/Context'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { BiSolidCategory } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import vsLogo from "../assets/Logo/logo.png"

import iphone16Icone from "../assets/CategoryIcone/iphone16.png"
import tshirtIcone from "../assets/CategoryIcone/tshirt.png"
import shoeIcone from "../assets/CategoryIcone/shoe.png"
import headphoneIcone from "../assets/CategoryIcone/headphone.png"
import watchIcone from "../assets/CategoryIcone/watch.png"
import tvIcone from "../assets/CategoryIcone/tv.png"
import laptopIcone from "../assets/CategoryIcone/laptop.png"
import shirtIcone from "../assets/CategoryIcone/shirt.png"
import footballIcone from "../assets/CategoryIcone/football.png"

import add from "./Pages/AddToCart/AddToCart"

const Navbar = ({ filterDisplay }) => {
    let {totalAmt,setTotalAmt, getFormattedAmount, isFilterOpen, setIsFilterOpen, searchText, setSearchText, addToCartArr, wishListtArr, searchTextincludesArr } = useContext(EcommerceContext)

    let [isCategory, setIsCategory] = useState(false)

     useEffect(() => {    
        setTotalAmt(addToCartArr.reduce((acc, item) => acc += parseInt(item.price) * parseInt(item.qty), 0))
        console.log(totalAmt)
      }, [addToCartArr])

    let url = useParams()

    return (
        <>
            <div className="nav-bar-main">
                <div className='nav-bar text-white py-1 '>
                    <div className="d-flex justify-content-between align-items-center container ">

                        <Link to="/" style={{ backgroundColor: "transparent" }}>
                            <div className="logo px-2 d-flex align-items-center gap-2">
                                {/* <span className='text-primary fs-3 fw-bold'>VS</span> */}
                                <img className='text-primary fs-3 fw-bold logoImg' src={vsLogo} alt="vs" />
                                <h3 className='m-0 text-white LogoText'>E Commerce</h3>
                            </div>
                        </Link>

                        <div className="searchBar px-1 px-md-3 mx-1 position-relative">
                            <form className='d-flex align-items-center'>
                                <input className='searchInput p-1' value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder='Search . . .' type="text" />
                                <button><IoMdSearch size={25} /></button>
                            </form>
                            {searchText.length >= 1 && <ul className='position-absolute p-0 top-20 start-0 searchUl'>
                                {searchTextincludesArr.map((data, i) => (
                                    <Link key={i} onClick={() => {
                                        setSearchText("")
                                    }}
                                        to={`/${data.catergory.toLowerCase()}/${data.productNo}/details`}>
                                        <li className='p-1 border-bottom d-flex align-items-center gap-1'>
                                            <img src={`${data.mainImg}`} alt={data.name} style={{ width: "30px", objectFit: "contain" }} />
                                            <span className='fs-6 py-sm-1 d-block d-md-none'>{(data.ditails.length >40 ?data.ditails.substring(0, 40) + "...":data.ditails)}</span>
                                            <span className='fs-6 py-sm-1 d-none d-md-block'>{(data.ditails.length >50 ?data.ditails.substring(0, 50) + "...":data.ditails)}</span>
                                        </li>
                                    </Link>
                                ))}
                            </ul>}
                        </div>
                        <div className="menu d-flex">

                            <Link to={"/likelist"}>
                                <div className="likelist navBarItem d-flex gap-0 align-items-center">
                                    <span className='px-2 navBarText '>WishList</span>
                                    <div className='d-flex align-items-center gap-md-2'>
                                        <FcLike size={20} />
                                        <span className='px-1'>{wishListtArr.length}</span>
                                    </div>
                                </div>
                            </Link>

                            <Link to={"/addtocart"}>
                                <div className="addtocart navBarItem d-flex gap-0 align-items-center">
                                    <span className='px-2 navBarText '>Cart</span>
                                    <div className='d-flex align-items-center gap-md-2'>
                                        <FaCartShopping size={20} />
                                        <span className='px-1 d-flex d-sm-none'>{addToCartArr.length}</span>
                                        <span className='px-1 d-none d-sm-flex text-success fw-bold'>₹ {getFormattedAmount(totalAmt)}</span>
                                    </div>
                                </div>
                            </Link>

                            <Link to={"/contact"}>
                                <div className="contact navBarItem d-flex gap-2 align-items-center">
                                    <span className='px-2 navBarText '>Contact</span>
                                    <div className='d-flex align-items-center gap-md-2'>
                                        <FaHeadphonesAlt size={20} />
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="catergoryNavBar px-3 py-1 d-flex text-white  align-items-center">
                    {filterDisplay && <span className='mx-sm-5 px-3'><IoFilterSharp size={25} color='white' onClick={() => setIsFilterOpen(!isFilterOpen)} /></span>}

                    <div className='mx-sm-4 d-none d-md-flex justify-content-between align-items-center flex-grow-1'>

                        <NavLink to={"/phone"} className={`d-flex NavLinkHover align-items-center gap-1 rounded px-3`}>
                            <img src={iphone16Icone} alt="" style={{ width: "25px" }} />
                            <span className=''>Phone</span>
                        </NavLink>

                        <NavLink to={"/laptop"} className={"d-flex NavLinkHover align-items-center gap-1 rounded px-3 "}>
                            <img src={laptopIcone} alt="" style={{ width: "25px" }} />
                            <span>Laptop</span>
                        </NavLink>

                        <NavLink to={"/tshirt"} className={"d-flex NavLinkHover align-items-center gap-1 rounded px-3 "}>
                            <img src={tshirtIcone} alt="" style={{ width: "25px" }} />
                            <span>T Shirt</span>
                        </NavLink>

                        <NavLink to={"/shirt"} className={"d-flex NavLinkHover align-items-center gap-1 rounded px-3 "}>
                            <img src={shirtIcone} alt="" style={{ width: "25px" }} />
                            <span>Shirt</span>
                        </NavLink>

                        <NavLink to={"/shoe"} className={"d-flex NavLinkHover align-items-center gap-1 rounded px-3 "}>
                            <img src={shoeIcone} alt="" style={{ width: "25px" }} />
                            <span>Shoe</span>
                        </NavLink>


                        <NavLink to={"/headphone"} className={"d-flex NavLinkHover align-items-center gap-1 rounded px-3 "}>
                            <img src={headphoneIcone} alt="" style={{ width: "25px" }} />
                            <span>HeadPhones</span>
                        </NavLink>

                        <NavLink to={"/smartWatch"} className={"d-flex NavLinkHover align-items-center gap-1 rounded px-3 "}>
                            <img src={watchIcone} alt="" style={{ width: "25px" }} />
                            <span>Smart Watch</span>
                        </NavLink>

                        <NavLink to={"/tv"} className={"d-flex NavLinkHover align-items-center gap-1 rounded px-3 "}>
                            <img src={tvIcone} alt="" style={{ width: "25px" }} />
                            <span>TV</span>
                        </NavLink>

                        <NavLink to={"/sport"} className={"d-flex NavLinkHover align-items-center gap-1 rounded px-3 "}>
                            <img src={footballIcone} alt="" style={{ width: "25px" }} />
                            <span>Sports</span>
                        </NavLink>
                    </div>

                    <div className='categoryIcone float-end d-block d-md-none'>
                        {isCategory ?
                            <IoClose size={25} onClick={() => setIsCategory(false)} />
                            :
                            <BiSolidCategory size={25} onClick={() => setIsCategory((pre) => !pre)} />}
                    </div>
                    <div className='d-block d-md-none' style={{ width: "25px", height: "25px" }}></div>
                    {isCategory && <ul className='categoryList p-0 m-0 d-block d-md-none'>

                        <NavLink to={"/phone"}>
                            <li className='d-flex align-items-center  gap-2'>
                                <img src={iphone16Icone} alt="" />
                                <span>Phone</span>
                            </li>
                        </NavLink>

                        <NavLink to={"/laptop"}>
                            <li className='d-flex align-items-center  gap-2'>
                                <img src={laptopIcone} alt="" />
                                <span>Laptop</span>
                            </li>
                        </NavLink>

                        <NavLink to={"/tshirt"}>
                            <li className='d-flex align-items-center  gap-2'>
                                <img src={tshirtIcone} alt="" />
                                <span>T Shirt</span>
                            </li>
                        </NavLink>
                        <NavLink to={"/shirt"}>
                            <li className='d-flex align-items-center  gap-2'>
                                <img src={shirtIcone} alt="" />
                                <span>Shirt</span>
                            </li>
                        </NavLink>

                        <NavLink to={"/shoe"}>
                            <li className='d-flex align-items-center  gap-2'>
                                <img src={shoeIcone} alt="" />
                                <span>Shoe</span>
                            </li>
                        </NavLink>
                        <NavLink to={"/headphone"}>
                            <li className='d-flex align-items-center gap-2'>
                                <img src={headphoneIcone} alt="" />
                                <span>HeadPhones</span>
                            </li>
                        </NavLink>

                        <NavLink to={"/smartWatch"}>
                            <li className='d-flex align-items-center  gap-2'>
                                <img src={watchIcone} alt="" />
                                <span>Smart Watch</span>
                            </li>
                        </NavLink>

                        <NavLink to={"/tv"}>
                            <li className='d-flex align-items-center  gap-2'>
                                <img src={tvIcone} alt="" />
                                <span>TV</span>
                            </li>
                        </NavLink>

                        <NavLink to={"/sport"}>
                            <li className='d-flex align-items-center  gap-2'>
                                <img src={footballIcone} alt="" />
                                <span>Sports</span>
                            </li>
                        </NavLink>

                    </ul>}
                </div>
            </div>

        </>
    )
}

export default Navbar