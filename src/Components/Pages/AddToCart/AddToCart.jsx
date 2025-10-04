import React, { useContext, useEffect, useState } from 'react'
import Navbar from "../../Navbar";
import EcommerceContext from '../../../Context/Context';
import EmptyAddToCart from "../../../assets/Icone/EmptyAddToCart.png"
import { IoAdd } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";

import "./AddToCart.css"
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer"
import Empty from '../EmptyPage/Empty';
import Notifiction from '../../Pages/Notification/Notifiction';

const AddToCart = () => {

  let { totalAmt, setTotalAmt, addToCartArr, setAddToCartArr, setSingleCartId, deleteAddToCartFun } = useContext(EcommerceContext)
  let isaddToCartArr = addToCartArr.filter((item) => item.selectSize)

  function qtyAdd(id) {
    let qtyUpdate = addToCartArr.map((item) =>
      item.addToCartID === id
        ? { ...item, qty: item.qty < 5 ? item.qty + 1 : item.qty } // return updated object
        : item
    );

    setAddToCartArr(qtyUpdate); // update state
  }


  function qtySubtact(id) {
    let qtyUpdate = addToCartArr.map((item) =>
      item.addToCartID === id
        ? { ...item, qty: item.qty > 1 ? item.qty - 1:item.qty } // return updated object
        : item
    );

    setAddToCartArr(qtyUpdate); // update state
  }


  let [totalPrice, setTotalPrice] = useState(0)
  let [totalQty, setTotalQty] = useState(0)
  // let [totalAmt, setTotalAmt] = useState(0)

  useEffect(() => {
    setTotalPrice(addToCartArr.reduce((acc, item) => acc += parseInt(item.price), 0))

    setTotalQty(addToCartArr.reduce((acc, item) => acc += parseInt(item.qty), 0))

    setTotalAmt(addToCartArr.reduce((acc, item) => acc += parseInt(item.price) * parseInt(item.qty), 0))
    console.log(totalAmt)
  }, [addToCartArr])

  return (
    <>
      <Navbar />
      {addToCartArr.length !== 0 ? <div className="paddingTop addToCartConatiner my-sm-5 p-sm-5 ">
        <div className="container addToCartByAddToCart">

          {/* Header */}
          <div className=" row align-items-center justify-content-between px-2">
            <div className='col-5 col-sm-6 d-flex align-items-center gap-3'>


              <div className="">
                <span className='fs-6 fs-sm-4 fw-bolder px-sm-5'>Product</span>
              </div>
            </div>

            <p className='col-3 col-sm-2 fs-6 fs-sm-4 fw-bolder mt-3'>Price</p>
            <p className='col-4 col-sm-2 fs-6 fs-sm-4 fw-bolder mt-3'> Quantity   </p>
            <p className='col-0 d-none d-sm-block col-sm-2 fs-6 fs-sm-4 fw-bolder mt-3'>Amount</p>
          </div>

          {/* Container */}

          {addToCartArr.map((data, i) => (
            <div key={i} className="addToCartItem px-3 px-sm-0 row align-items-center justify-content-between">

              <Link to={`${data.productNo}/details`} className='px-1 link-wrapper col-5 col-sm-6  align-items-center gap-1 gap-sm-3 d-flex text-dark'>
                <div className='text-dark px-0 d-flex align-items-center gap-1 gap-sm-3 p-0'>

                  {/* <span className='fs-4 fw-bolder'>Product</span> */}

                  <div className="imgConatiner p-1 p-sm-3">
                    <img src={data.selectColorImg ? data.selectColorImg : data.mainImg} alt="" />
                  </div>

                  <div className="ditails">
                    <p className="addToCartText d-block fw-bold m-0 text-primary">{data.Brand}</p>
                    {data.catergory && <p className='addToCartText d-none d-sm-flex text-capitalize mb-1 mb-sm-2'>{data.catergory}</p>}
                    {
                      data.selectSize ? <p className='addToCartText m-0 '> <span className='fw-bolder text-primary'>Size</span> : {data.selectSize} </p> :
                        <>
                          {/* {data.name && <p className='addToCartText fw-bolder  m-0'>{data.name}</p>}
                          {data.selectStorage && <p className='addToCartText fw-bolder  m-0'> {parseInt(data.selectStorage)}GB</p>}
                          {data.selectRam && <p className='addToCartText fw-bolder  m-0'>{data.selectRam} GB</p>} */}

                          {<p className='ditailsText m-0'>{data.selectDitails ? data.selectDitails.substring(0, 40) : data.ditails.substring(0, 40)}...</p>}

                        </>

                    }
                    {data.mainColor && <p className='d-none d-sm-block'> <span className='fw-bolder text-primary '>color</span> : {data.color || data.selectColor || data.mainColor}</p>}
                  </div>

                </div>
              </Link>


              {/* <div className="priceContainer d-flex gap-3"> */}
              <p className='col-3 col-sm-2'>₹{data.selectPrice ? data.selectPrice : data.price}</p>
              <p className='col-4 col-sm-2 d-flex align-items-center gap-3 gap-sm-4'>
                <span className='qtyBtn' onClick={() => qtySubtact(data.addToCartID)}>
                  <RiSubtractFill /></span>  {data.qty}  <span className='qtyBtn' onClick={() => qtyAdd(data.addToCartID)}> < IoAdd /> </span></p>
              <p className='col-0 d-none d-sm-block col-sm-2'>₹ {data.selectPrice ? data.selectPrice * data.qty : data.price * data.qty}</p>
              {/* </div> */}

              <div>
                <span className='deleteAddToCart' onClick={() => deleteAddToCartFun(data.addToCartID)}><FaTrash color='red' /> </span>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="d-none d-sm-flex addToCartTotal p-3 px-md-5 fs-6 fs-sm-2 fw-bold text-uppercase row justify-content-between align-items-center">

            <span className='totalText col-6'>Total : </span>
            <span className='totalText col-2'>₹ {totalPrice}</span>
            <span className='totalText col-2 text-center'>{totalQty}</span>
            <span className='totalText col-2 text-center'>₹ {totalAmt}</span>
          </div>

          <div className="d-flex d-sm-none addToCartTotal p-3 px-md-5 fs-6 fs-sm-2 fw-bold text-uppercase  justify-content-between align-items-center">

            <span className='totalText'>Total : </span>

            <span className='totalText'>₹ {totalAmt}</span>
          </div>

        </div>
      </div>
        : <Empty img={EmptyAddToCart} text={"Add To Cart Item Empty"} />}
      <Notifiction/>
      <Footer />
    </>
  )
}

export default AddToCart