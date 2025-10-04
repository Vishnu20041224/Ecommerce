import React, { useContext, useRef } from 'react'
import EcommerceContext from '../../../Context/Context'
import { Link, NavLink } from 'react-router-dom';
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import Cart2 from "../../Carts/Cart2/Cart2"



const Productes = () => {
  let { phoneDatas, shirtData, laptopDatas, tshirtsDatas, smartWatchData, randomProduct, tvData, shoeDatas, headPhonesData, sportsData
    , ratingImg, deliveryData, setSingleCartId, addToCartArr, setAddToCartArr, wishListtArr, addToCartFun, toggleWishList, calculateOffer,
  } = useContext(EcommerceContext)

  // function ProductList({ phoneDatas }) {

  const scrollRefPhone = useRef(null);
  const scrollRefLaptop = useRef(null);
  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 520, behavior: "smooth" });
    }
  };
  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -520, behavior: "smooth" });
    }
  };
  // }

  return (
    <>
      <div className='' style={{ width: "99%" }}>

        <div className="containe row align-items-center d-none d-md-flex">

          <div className="col-6 col-sm-3 my-2 p-0 ">
            <div className="main-box mx-sm-3 py-2 px-3">
              <h4 className="px-0 fs7 fs-sm-4 text-center fst-italic fw-bolder pt-sm-3 mb-0">Latest Sound Tech</h4>
              <div className="row justify-content-between">

                {randomProduct(headPhonesData, 4).map((data, i) => (
                  <div key={i} className="col-6 p-0">
                    <div className="box">
                      <Link to={`${data.catergory.toLowerCase()}/${data.productNo}/details`} >
                        <img src={data.mainImg} alt="" />
                        <p className="fs-8 m-0 px-1">{data.ditails.substring(0, 25)}...</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <Link to={`headphone`}>
                <span className="text-primary fs8 px-2">See all deals</span>
              </Link>
            </div>
          </div>

          <div className="col-6 col-sm-3 my-2 p-0 ">
            <div className="main-box mx-sm-3 py-2 px-3">
              <h4 className="px-0 fs7 fs-sm-4 text-center fst-italic fw-bolder pt-sm-3 mb-0">Smart TV Deals</h4>
              <div className="row justify-content-between">

                {randomProduct(tvData, 4).map((data, i) => (
                  <div key={i} className="col-6 p-0">
                    <div className="box">
                      <Link to={`${data.catergory.toLowerCase()}/${data.productNo}/details`} >
                        <img src={data.mainImg} alt="" />
                        <p className="fs-8 m-0 px-1">{data.ditails.substring(0, 25)}...</p>
                      </Link>
                    </div>
                  </div>
                ))}

              </div>

              <Link to={`tv`}>
                <span className="text-primary fs8 px-2">See all deals</span>
              </Link>
            </div>
          </div>


          <div className="col-6 col-sm-3 my-2 p-0 ">
            <div className="main-box mx-sm-3 py-2 px-3">
              <h4 className="px-0 fs7 fs-sm-4 text-center fst-italic fw-bolder pt-sm-3 mb-0">Step in Style</h4>
              <div className="row justify-content-between">

                {randomProduct(shoeDatas, 4).map((data, i) => (
                  <div key={i} className="col-6 p-0">
                    <div className="box">
                      <Link to={`${data.catergory.toLowerCase()}/${data.productNo}/details`} >
                        <img src={data.mainImg} alt="" />
                        <p className="fs-8 m-0 px-1">{data.ditails.substring(0, 25)}...</p>
                      </Link>
                    </div>
                  </div>
                ))}

              </div>
              <Link to={`shoe`}>
                <span className="text-primary fs8 px-2">See all deals</span>
              </Link>
            </div>
          </div>


          <div className="col-6 col-sm-3 my-2 p-0 ">
            <div className="main-box mx-sm-3 py-2 px-3">
              <h4 className="px-0 fs7 fs-sm-4 text-center fst-italic fw-bolder pt-sm-3 mb-0">Top Sports Gear</h4>
              <div className="row justify-content-between">

                {randomProduct(sportsData, 4).map((data, i) => (
                  <div key={i} className="col-6 p-0">
                    <div className="box">
                      <Link to={`${data.catergory.toLowerCase()}/${data.productNo}/details`} >
                        <img src={data.mainImg} alt="" />
                        <p className="fs-8 m-0 px-1">{data.ditails.substring(0, 25)}...</p>
                      </Link>
                    </div>
                  </div>
                ))}

              </div>
              <Link to={`sport`}>
                <span className="text-primary fs8 px-2">See all deals</span>
              </Link>
            </div>
          </div>

        </div>

        <div className="containe row align-items-center d-flex d-md-none">

          <div className="col-6 col-sm-3 my-sm-2 px-2  p-sm-1 ">
            <div className="main-box mx-sm-3 py-2 px-3">
              <h4 className="px-0 fs7 fs-sm-4 text-center fst-italic fw-bolder pt-sm-3 mb-0">Smart Picks</h4>
              <div className="row justify-content-between">

                {randomProduct(phoneDatas, 4).map((data, i) => (
                  <div key={i} className="col-6 p-0">
                    <div className="box">
                      <Link to={`${data.catergory.toLowerCase()}/${data.productNo}/details`} >
                        <img src={data.mainImg} alt="" />
                        <p className="m-0 px-1 d-none d-sm-block">{data.ditails.substring(0, 25)}...</p>
                        <p className="m-0 px-1 d-block d-sm-none">{data.ditails.substring(0, 18)}...</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <Link to={`phone`}>
                <span className="text-primary fs8 px-2">See all deals</span>
              </Link>
            </div>
          </div>

          <div className="col-6 col-sm-3 my-sm-2 px-2  p-sm-1 ">
            <div className="main-box mx-sm-3 py-2 px-3">
              <h4 className="px-0 fs7 fs-sm-4 text-center fst-italic fw-bolder pt-sm-3 mb-0">Premium Collection</h4>
              <div className="row justify-content-between">

                {randomProduct(tshirtsDatas, 4).map((data, i) => (
                  <div key={i} className="col-6 p-0">
                    <div className="box">
                      <Link to={`${data.catergory.toLowerCase()}/${data.productNo}/details`} >
                        <img src={data.mainImg} alt="" />
                        <p className="m-0 px-1 d-none d-sm-block">{data.ditails.substring(0, 25)}...</p>
                        <p className="m-0 px-1 d-block d-sm-none">{data.ditails.substring(0, 18)}...</p>
                      </Link>
                    </div>
                  </div>
                ))}

              </div>

              <Link to={`tshirt`}>
                <span className="text-primary fs8 px-2">See all deals</span>
              </Link>
            </div>
          </div>


          <div className="col-6 col-sm-3 my-sm-2 px-2  p-sm-1 ">
            <div className="main-box mx-sm-3 py-2 px-3">
              <h4 className="px-0 fs7 fs-sm-4 text-center fst-italic fw-bolder pt-sm-3 mb-0">Work & Play Deals</h4>
              <div className="row justify-content-between">

                {randomProduct(laptopDatas, 4).map((data, i) => (
                  <div key={i} className="col-6 p-0">
                    <div className="box">
                      <Link to={`${data.catergory.toLowerCase()}/${data.productNo}/details`} >
                        <img src={data.mainImg} alt="" />
                        <p className="m-0 px-1 d-none d-sm-block">{data.ditails.substring(0, 25)}...</p>
                        <p className="m-0 px-1 d-block d-sm-none">{data.ditails.substring(0, 18)}...</p>
                      </Link>
                    </div>
                  </div>
                ))}

              </div>
              <Link to={`laptop`}>
                <span className="text-primary fs8 px-2">See all deals</span>
              </Link>
            </div>
          </div>


          <div className="col-6 col-sm-3 my-sm-2 px-2  p-sm-1 ">
            <div className="main-box mx-sm-3 py-2 px-3">
              <h4 className="px-0 fs7 fs-sm-4 text-center fst-italic fw-bolder pt-sm-3 mb-0">Classic Collection</h4>
              <div className="row justify-content-between">

                {randomProduct(smartWatchData, 4).map((data, i) => (
                  <div key={i} className="col-6 p-0">
                    <div className="box">
                      <Link to={`${data.catergory.toLowerCase()}/${data.productNo}/details`} >
                        <img src={data.mainImg} alt="" />
                        <p className="m-0 px-1 d-none d-sm-block">{data.ditails.substring(0, 25)}...</p>
                        <p className="m-0 px-1 d-block d-sm-none">{data.ditails.substring(0, 18)}...</p>
                      </Link>
                    </div>
                  </div>
                ))}

              </div>
              <Link to={`smartwatch`}>
                <span className="text-primary fs8 px-2">See all deals</span>
              </Link>
            </div>
          </div>

        </div>

        <div className=' bg-white px-4 pt-3 position-relative'>
          <Link to={`phone`}>
            <h4 className='px-sm-3 text-dark fs-sm-4 fst-italic fw-bolder mb-0 homePageHeadText'>Hot Deals on Phones</h4>
          </Link>
          <div className='d-flex my-scroll-container ' ref={scrollRefPhone}>
            {[...phoneDatas].reverse().map((data, i) =>

              <div key={i} className="productesCart bg-white text-dark m-sm-3 py-sm-3" >
                <Link to={`${data.catergory}/${data.productNo}/details`}>
                  <div className="cartImg py-0 ">
                    <img className="mx-auto" src={data.mainImg} alt={data.name} style={{ objectFit: "contain" }} />
                  </div>
                  <div className="cartDitails linkColor px-3">
                    <p className='CartName fw-bold my-1'>{data.Brand}</p>
                    <p className="ProductDitails m-0">{data.ditails.substring(0, 30)}...</p>
                    <img className="rating my-0" src={ratingImg(data.rating)} alt="" style={{ width: "60px" }} />
                    <div className="priceDitails d-flex gap-2 align-items-end p-0 ">
                      <div>
                        <span className="fs-6 fs-sm-2 fw-bolder">₹{data.price}</span>
                        {data.discount > 0 && <div className="d-flex gap-1 gap-sm-3">
                          <samp className="py-0 fs8 text-decoration-line-through text-secondary fw-lighter">₹{data.mrp}</samp>
                          <samp style={{ color: "white", backgroundColor: "crimson" }} className="fs8 py-0 fw-lighter">({calculateOffer(data.mrp, data.price)}%off)</samp>
                        </div>}
                      </div>
                    </div>
                    <p className="delivery m-0">FREE delivery {deliveryData(Math.floor(data.rating))}</p>
                  </div>
                </Link>
              </div>

            )}
          </div>
          <span onClick={() => scrollLeft(scrollRefPhone)} className='bg-white p-1 bg-danger scrollLeft position-absolute top-50 start-0'><FaAnglesLeft size={25} /></span>
          <span onClick={() => scrollRight(scrollRefPhone)} className='bg-white p-1 scrollRight position-absolute top-50 end-0'><FaAnglesRight size={25} /></span>

        </div>

        <div className="containe row align-items-center ">

          <div className="col-6 col-sm-3 my-sm-2 px-2  p-sm-1 ">
            <div className="main-box mx-sm-3 py-2 px-3">
              <h4 className="px-0 fs7 fs-sm-4 text-center fst-italic fw-bolder pt-sm-3 mb-0">Smart Picks</h4>
              <div className="row justify-content-between">

                {randomProduct(laptopDatas, 4).map((data, i) => (
                  <div key={i} className="col-6 p-0">
                    <div className="box">
                      <Link to={`${data.catergory.toLowerCase()}/${data.productNo}/details`} >
                        <img src={data.mainImg} alt="" />
                        <p className="m-0 px-1 d-none d-sm-block">{data.ditails.substring(0, 25)}...</p>
                        <p className="m-0 px-1 d-block d-sm-none">{data.ditails.substring(0, 18)}...</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <Link to={`laptop`}>
                <span className="text-primary fs8 px-2">See all deals</span>
              </Link>
            </div>
          </div>

          <div className="col-6 col-sm-3 my-sm-2 px-2  p-sm-1 ">
            <div className="main-box mx-sm-3 py-2 px-3">
              <h4 className="px-0 fs7 fs-sm-4 text-center fst-italic fw-bolder pt-sm-3 mb-0">Premium Collection</h4>
              <div className="row justify-content-between">

                {randomProduct(shirtData, 4).map((data, i) => (
                  <div key={i} className="col-6 p-0">
                    <div className="box">
                      <Link to={`${data.catergory.toLowerCase()}/${data.productNo}/details`} >
                        <img src={data.mainImg} alt="" />
                        <p className="m-0 px-1 d-none d-sm-block">{data.ditails.substring(0, 25)}...</p>
                        <p className="m-0 px-1 d-block d-sm-none">{data.ditails.substring(0, 18)}...</p>
                      </Link>
                    </div>
                  </div>
                ))}

              </div>

              <Link to={`shirt`}>
                <span className="text-primary fs8 px-2">See all deals</span>
              </Link>
            </div>
          </div>


          <div className="col-6 col-sm-3 my-sm-2 px-2  p-sm-1 ">
            <div className="main-box mx-sm-3 py-2 px-3">
              <h4 className="px-0 fs7 fs-sm-4 text-center fst-italic fw-bolder pt-sm-3 mb-0">Work & Play Deals</h4>
              <div className="row justify-content-between">

                {randomProduct(headPhonesData, 4).map((data, i) => (
                  <div key={i} className="col-6 p-0">
                    <div className="box">
                      <Link to={`${data.catergory.toLowerCase()}/${data.productNo}/details`} >
                        <img src={data.mainImg} alt="" />
                        <p className="m-0 px-1 d-none d-sm-block">{data.ditails.substring(0, 25)}...</p>
                        <p className="m-0 px-1 d-block d-sm-none">{data.ditails.substring(0, 18)}...</p>
                      </Link>
                    </div>
                  </div>
                ))}

              </div>
              <Link to={`headphone`}>
                <span className="text-primary fs8 px-2">See all deals</span>
              </Link>
            </div>
          </div>


          <div className="col-6 col-sm-3 my-sm-2 px-2  p-sm-1 ">
            <div className="main-box mx-sm-3 py-2 px-3">
              <h4 className="px-0 fs7 fs-sm-4 text-center fst-italic fw-bolder pt-sm-3 mb-0">Classic Collection</h4>
              <div className="row justify-content-between">

                {randomProduct(tvData, 4).map((data, i) => (
                  <div key={i} className="col-6 p-0">
                    <div className="box">
                      <Link to={`${data.catergory.toLowerCase()}/${data.productNo}/details`} >
                        <img src={data.mainImg} alt="" />
                        <p className="m-0 px-1 d-none d-sm-block">{data.ditails.substring(0, 25)}...</p>
                        <p className="m-0 px-1 d-block d-sm-none">{data.ditails.substring(0, 18)}...</p>
                      </Link>
                    </div>
                  </div>
                ))}

              </div>
              <Link to={`tv`}>
                <span className="text-primary fs8 px-2">See all deals</span>
              </Link>
            </div>
          </div>

        </div>

        <div className='bg-white px-4 pt-3 position-relative'>
          <Link to={`/laptop`}>
            <h4 className='  px-sm-3 text-dark fs-sm-4 fst-italic fw-bolder mb-0 homePageHeadText'>Hot Picks in Laptops</h4>
          </Link>
          <div className=' d-flex my-scroll-container ' ref={scrollRefLaptop}>
            {[...laptopDatas].reverse().map((data, i) =>
              // <div key={i} className=" productesCart bg-white text-dark m-sm-3 py-sm-3" >
              //   <Link to={`${data.catergory}/${data.productNo}/details`}>
              //     <div className="cartImg py-0 ">
              //       <img className="mx-auto" src={data.mainImg} alt={data.name} style={{ objectFit: "contain" }} />
              //     </div>
              //     <div className="cartDitails linkColor px-3">
              //       <p className='CartName fw-bold my-1'>{data.Brand}</p>
              //       <p className="ProductDitails m-0">{data.ditails.substring(0, 30)}...</p>
              //       <img className="rating my-0" src={ratingImg(data.rating)} alt="" style={{ width: "60px" }} />
              //       <div className="priceDitails d-flex gap-2 align-items-end p-0 ">
              //         <div>
              //           <span className="fs-6 fs-sm-2 fw-bolder">₹{data.price}</span>
              //           {data.discount > 0 && <div className="d-flex gap-1 gap-sm-3">
              //             <samp className="py-0 fs8 text-decoration-line-through text-secondary fw-lighter">₹{data.mrp}</samp>
              //             <samp style={{ color: "white", backgroundColor: "crimson" }} className="fs8 py-0 fw-lighter">({calculateOffer(data.mrp, data.price)}%off)</samp>
              //           </div>}
              //         </div>
              //       </div>
              //       <p className="delivery m-0">FREE delivery {deliveryData(Math.floor(data.rating))}</p>
              //     </div>
              //   </Link>
              // </div>
              <Cart2 data={data} key={i}/>
            )}
          </div>
          <span onClick={() => scrollLeft(scrollRefLaptop)} className='bg-white p-1 bg-danger scrollLeft position-absolute top-50 start-0'><FaAnglesLeft size={25} /></span>
          <span onClick={() => scrollRight(scrollRefLaptop)} className='bg-white p-1 scrollRight position-absolute top-50 end-0'><FaAnglesRight size={25} /></span>

        </div>

      </div >
    </>
  )
}

export default Productes