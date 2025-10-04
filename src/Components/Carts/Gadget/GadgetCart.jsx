import React, { useContext, useState, useEffect } from 'react'
import "./GadgetCart.css"
import EcommerceContext from '../../../Context/Context'
import { Link, NavLink } from 'react-router-dom';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import AddToCartIcone from "../../../assets/Icone/AddToCart4.png"
import Notifiction from '../../Pages/Notification/Notifiction';


const GadgetCart = ({ data }) => {
  let { notification, setNotification,                      // notification                  
      newNoti, removeNotification,
       getFormattedAmount, deliveryData, ratingImg, singleCartId, setSingleCartId, addToCartFun, wishListtArr, toggleWishList, calculateOffer } = useContext(EcommerceContext)

  let [isWishListData, setIsWishListData] = useState(false)
  useEffect(() => {
    setIsWishListData(wishListtArr.some((item) => item.productNo === data.productNo))
  }, [wishListtArr])


  let [availableColors, setAvailableColors] = useState([])

  useEffect(() => {
    if (data.collectionsImgs) {
      setAvailableColors(Object.keys(data.collectionsImgs))
    }
  }, [])



  return (
    <>
      <div className='bg-white mx-sm-2 gadget text-dark gadgetCart my-2 my-sm-3 p-md-1 p-1 d-sm-flex align-items-center justify-content-start'>
        <Link to={`${data.productNo}/details`}>
          <div className='gadgetCartImg d-flex justify-content-between mx-auto m-sm-0 float-md-start '>
            <img src={data.mainImg} alt={data.name} />
          </div>
        </Link>

        <div className="gadgetCartDitails px-2 px-sm-4 py-3 py-sm-0">
          <Link to={`${data.productNo}/details`} >
            <div className='p-0 m-0 text-dark'>
              <h5 className='productData ditailsTextColor'>{data.ditails}</h5>
              <img className='ratingImg' src={ratingImg(data.rating)} alt="" />
              <div className="priceDit my-1 d-flex gap-2 flex-wrap align-items-center">
                <h4 className='fw-blod fs-6 mb-0 fs-sm-4'>₹ { getFormattedAmount(data.price)}</h4>
                <div className='mrpOff py-0 px-2'>
                  <span className='mx-2 mrp fs-6'>M.R.P ₹ {getFormattedAmount(data.mrp)}</span>
                  <span className=' text-danger'>({calculateOffer(data.mrp, data.price)} OFF)</span>
                </div>
              </div>
              <div className='delivery'>
                <p className='m-0'>FREE delivery <span className='fw-bold'> {deliveryData(Math.floor(data.rating))}</span></p>
                <p>6 am - 5 pm </p>
              </div>
            </div>
          </Link>

          <button onClick={() => {
            addToCartFun(data.productNo, data)
            
            }} className='btn btn-addToCart d-flex gap-2 '>
            <span>Add To Cart</span>
            <span className='icone'> <img src={AddToCartIcone} alt="AddToCartIcone" style={{width:"100%",height:"100%"}}/> </span>
          </button>

          
        </div>

        <span className='likeByGadgetCart' onClick={() => toggleWishList(data.productNo)}> {isWishListData ? < FaHeart size={"20"} color={"red"} /> : <FaRegHeart size={20} />}</span>
      </div >
    </>

  )
}

export default GadgetCart