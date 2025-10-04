import React, { useContext, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom';
import EcommerceContext from '../../../Context/Context';

const Cart2 = ({ data }) => {
    let {getFormattedAmount, ratingImg, calculateOffer, deliveryData } = useContext(EcommerceContext)

    

    return (
        <div className=" productesCart bg-white text-dark m-sm-3 py-sm-3" >
            <Link to={`/${data.catergory.toLowerCase()}/${data.productNo}/details`}>
                <div className="cartImg py-0 ">
                    <img className="mx-auto" src={data.mainImg} alt={data.name} style={{ objectFit: "contain" }} />
                </div>
                <div className="cartDitails linkColor px-3">
                    <p className='CartName fw-bold my-1'>{data.Brand}</p>
                    <p className="ProductDitails m-0">{data.ditails.substring(0, 30)}...</p>
                    <img className="rating my-0" src={ratingImg(data.rating)} alt="" style={{ width: "60px" }} />
                    <div className="priceDitails d-flex gap-2 align-items-end p-0 ">
                        <div>
                            <span className="fs-6 fs-sm-2 fw-bolder">₹{getFormattedAmount(data.price)}</span>
                            {data.discount > 0 && <div className="d-flex gap-1 gap-sm-3">
                                <samp className="py-0 fs8 text-decoration-line-through text-secondary fw-lighter">₹{getFormattedAmount(data.mrp)}</samp>
                                <samp style={{ color: "white", backgroundColor: "crimson" }} className="fs8 py-0 fw-lighter">({calculateOffer(data.mrp, data.price)}%off)</samp>
                            </div>}
                        </div>
                    </div>
                    <p className="delivery m-0">FREE delivery {deliveryData(Math.floor(data.rating))}</p>
                </div>
            </Link>
        </div>
    )
}

export default Cart2