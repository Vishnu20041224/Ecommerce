import "./Cart.css"
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useContext, useState, useEffect } from "react";
import EcommerceContext from "../../../Context/Context";
import { Link } from "react-router-dom";
import AddToCartIcone from "../../../assets/Icone/AddToCart4.png"

const Cart = ({ data }) => {

    let { getFormattedAmount, ratingImg, deliveryData, setSingleCartId, addToCartArr, setAddToCartArr, wishListtArr, addToCartFun, toggleWishList, calculateOffer } = useContext(EcommerceContext)



    let [isWishListData, setIsWishListData] = useState(false)
    useEffect(() => {
        setIsWishListData(wishListtArr.some((item) => item.productNo === data.productNo))
    }, [wishListtArr])


    return (
        <>
            <div className="cart mx-1 m-sm-3 py-sm-3">
                <Link to={`/${data.catergory}/${data.productNo}/details`}>
                    <div className="cartImg py-0">
                        <img className="mx-auto" src={data.mainImg} alt={data.name} />
                    </div>
                    {/* <span>{data.catergory}</span> */}
                </Link>
                <div className="cartDitails px-1 px-sm-3">
                    <p className='CartName fw-bold my-1'>{data.Brand}</p>
                    <p className="ProductDitails m-0">{data.ditails.substring(0, 30)}</p>
                    <img className="rating my-0" src={ratingImg(data.rating)} alt="" />
                    <div className="priceDitails d-flex gap-2 align-items-end p-0 ">
                        <div>
                            <span className="price fs-sm-2 fw-bolder">₹{getFormattedAmount(data.price)}</span>
                            {data.discount > 0 && <div className="d-flex gap-1 gap-sm-3">
                                <samp className="py-0 mrp text-secondary fw-lighter">₹{getFormattedAmount(data.mrp)}</samp>
                                <samp className="py-0 off text-danger fw-lighter">({calculateOffer(data.mrp, data.price)}%off)</samp>
                            </div>}
                        </div>
                    </div>
                    <p className="delivery m-0">FREE delivery {deliveryData(Math.floor(data.rating))}</p>
                    <button onClick={() => addToCartFun(data.productNo, data)} className="btn-addToCart btn px-1 px-sm-2 py-2 my-2 addToCart float-end align-items-center d-flex gap-1 justify-content-between justify-content-sm-start px-3 px-sm-0">
                        <span>Add To Cart</span>
                        <span className='icone'> <img src={AddToCartIcone} alt="AddToCartIcone" style={{ width: "100%", height: "100%" }} /> </span>
                    </button>
                    <span className="like" onClick={() => toggleWishList(data.productNo)}> {isWishListData ? < FaHeart size={"20"} color={"red"} /> : <FaRegHeart size={20} />} </span>
                </div>
            </div>
        </>
    )
}

export default Cart