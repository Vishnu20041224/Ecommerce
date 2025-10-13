import { useContext, useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom';
import EcommerceContext from '../../../Context/Context'
import phoneData from "../../../assets/Producted/Phone.json"
import laptopData from "../../../assets/Producted/Laptop.json"
import tshirtData from "../../../assets/Producted/Tshirt.json"
import Datas from "../../../assets/Producted/Datas.json"
import Notifiction from "../../Pages/Notification/Notifiction"

import "./SingleCart.css"
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../Navbar'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { TbArrowUpTail } from 'react-icons/tb'
import Cart2 from "../Cart2/Cart2"
import Cart from "../Cart/Cart"
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import Footer from "../../Pages/Footer/Footer"

// import {  } from "react-icons/fa";
const SingleCart = () => {

    let { searchLink, getFormattedAmount, urlId, setUrlId, deliveryData, ratingImg, singleCartId, addToCartArr, setAddToCartArr, wishListtArr, setWishListArr, addToCartFun, allProductsDatas, setAllProductsDatas, toggleWishList, calculateOffer } = useContext(EcommerceContext)

    let [showMainImg, setShowMainimg] = useState(0)

    let dataset = {
        phone: phoneData,
        laptop: laptopData,
        tshirt: tshirtData,
    }

    //secting single cart data
    let [dataArr, setDataArr] = useState(Datas)
    let url = useParams();
    const [singleCartData, setSingleCartData] = useState(dataArr.find((data) => data.productNo === parseInt(url.id)));



    const { id } = useParams(); // id will be "1123456789018"
    let [data, setData] = useState(singleCartData);

    useEffect(() => {

        const foundData = dataArr.find((item) => item.productNo === parseInt(id));
        if (foundData) {
            setSingleCartData(foundData);
            setData(foundData);
        }

        setIsWishListData(wishListtArr.some((item) => item.productNo === data.productNo))

        window.scrollTo(0, 0);
    }, [id, singleCartData]);






    // all Brande Items 
    let brandItems = Datas.filter((item) => item.Brand === data.Brand)

    // all catergory
    let catergoryItem = Datas.filter((item) => item.catergory === data.catergory)


    const scrollRefrelativeBrand = useRef(null);
    const scrollRefrelativeCatergory = useRef(null);
    const scrollRefrelativeCatergoryReverse = useRef(null);
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

    //all Storages 
    let allStoreages
    if (data.storagesPrice) {
        let storagesPrice = data.storagesPrice
        allStoreages = Object.keys(storagesPrice)
    }

    // function Storage 

    let [selectStorage, setSelectStorage] = useState(data.MemoryStorageCapacity)
    let [selectRam, setSelectRam] = useState(data.RAMMemorySize)


    function selectStorageFun(id, selStorage) {
        setSelectStorage(selStorage)

        setSelectRam(data.storagesPrice[selStorage].ram)

        const updatedArr = dataArr.map((item) =>
            item.productNo === id ? {
                ...item,

                selectStorage: selStorage,
                selectRam: data.storagesPrice[selStorage].ram,
                selectPrice: data.storagesPrice[selStorage].price,
                selectMrp: data.storagesPrice[selStorage].mrp,
                selectDiscount: data.storagesPrice[selStorage].discount,
                selectDitails: data.storagesPrice[selStorage].ditails
            } : item
        );
        setDataArr(updatedArr);

        const updatedData = updatedArr.find((item) => item.productNo === id);
        setData(updatedData);

        setAllProductsDatas(allProductsDatas.map(item => item.productNo === id ? {
            ...item,

            selectStorage: selStorage,
            selectRam: data.storagesPrice[selStorage].ram,
            selectPrice: data.storagesPrice[selStorage].price,
            selectMrp: data.storagesPrice[selStorage].mrp,
            selectDiscount: data.storagesPrice[selStorage].discount,
            selectDitails: data.storagesPrice[selStorage].ditails


        } : item))

    }


    function selectRamFun(id, selRam) {
        setSelectRam(selRam)

        setSelectStorage(data.ramPrice[selRam].storage)

        const updatedArr = dataArr.map((item) =>
            item.productNo === id ? {
                ...item,
                selectRam: selRam,
                selectStorage: data.ramPrice[selRam].storage,
                selectPrice: data.ramPrice[selRam].price,
                selectMrp: data.ramPrice[selRam].mrp,
                selectDiscount: data.ramPrice[selRam].discount,
                selectDitails: data.ramPrice[selRam].ditails
            } : item
        );
        setDataArr(updatedArr);

        const updatedData = updatedArr.find((item) => item.productNo === id);
        setData(updatedData);

        setAllProductsDatas(allProductsDatas.map(item => item.productNo === id ? {
            ...item,
            selectRam: selRam,
            selectStorage: data.ramPrice[selRam].storage,
            selectPrice: data.ramPrice[selRam].price,
            selectMrp: data.ramPrice[selRam].mrp,
            selectDiscount: data.ramPrice[selRam].discount,
            selectDitails: data.ramPrice[selRam].ditails
        } : item))
    }


    // select inches
    let [selectScreenSizes, setSelectScreenSizes] = useState(data.ScreenSizes)
    let [selectRefreshRate, setSelectRefreshRate] = useState(data.refreshRate)
    let [selectResolution, setSelectResolution] = useState(data.Resolution)
    // let [currentImg, setCurrentImg] = useState(data.imgs)


    let allScreenSizesInches

    if (data.ScreenSizesPrice) {
        let ScreenSizesPrice = data.ScreenSizesPrice
        allScreenSizesInches = Object.keys(ScreenSizesPrice)
    }

    function selectScreenSizeFun(id, selScreenSize) {
        setSelectScreenSizes(selScreenSize)
        setSelectRefreshRate(data.ScreenSizesPrice[selScreenSize].refreshRate)
        setSelectResolution(data.ScreenSizesPrice[selScreenSize].Resolution)
        setSelectColorImg(data.ScreenSizesPrice[selScreenSize].imgs)

        const updatedArr = dataArr.map((item) =>
            item.productNo === id ? {
                ...item,
                selectScreenSize: selScreenSize,
                selectName: data.ScreenSizesPrice[selScreenSize].name,
                selectColorImg: data.ScreenSizesPrice[selScreenSize].imgs[0],
                selectPrice: data.ScreenSizesPrice[selScreenSize].price,
                selectMrp: data.ScreenSizesPrice[selScreenSize].mrp,
                selectDiscount: data.ScreenSizesPrice[selScreenSize].discount,
                selectDitails: data.ScreenSizesPrice[selScreenSize].ditails
            } : item
        );
        setDataArr(updatedArr);

        const updatedData = updatedArr.find((item) => item.productNo === id);
        setData(updatedData);

        setAllProductsDatas(allProductsDatas.map(item => item.productNo === id ? {
            ...item,
            selectScreenSize: selScreenSize,
            selectName: data.ScreenSizesPrice[selScreenSize].name,
            selectColorImg: data.ScreenSizesPrice[selScreenSize].imgs[0],
            selectPrice: data.ScreenSizesPrice[selScreenSize].price,
            selectMrp: data.ScreenSizesPrice[selScreenSize].mrp,
            selectDiscount: data.ScreenSizesPrice[selScreenSize].discount,
            selectDitails: data.ScreenSizesPrice[selScreenSize].ditails
        } : item))

    }


    function selectUpdateDataFun(id, selectitem, set) {
        set(selectitem)

        const updatedArr = dataArr.map((item) =>
            item.productNo === id ? { ...item, set: selectitem } : item
        );
        setDataArr(updatedArr);

        const updatedData = updatedArr.find((item) => item.productNo === id);
        setData(updatedData);

        setAllProductsDatas(allProductsDatas.map(item => item.productNo === id ? { ...item, set: selectitem } : item))

    }

    //All Ram

    let allRams

    if (data.ramPrice) {
        let ramPrice = data.ramPrice
        allRams = Object.keys(ramPrice)
    }


    function selectSize(id, size) {
        const updatedArr = dataArr.map((item) =>
            item.productNo === id ? { ...item, selectSize: size } : item
        );
        setDataArr(updatedArr);

        const updatedData = updatedArr.find((item) => item.productNo === id);
        setData(updatedData);

        setAllProductsDatas(allProductsDatas.map(item => item.productNo === id ? { ...item, selectSize: size } : item))
    }

    let [chest, setChest] = useState("");
    let [length, setLength] = useState("");
    let [sleeve, setSleeve] = useState("");
    let [shoulder, setShoulder] = useState("");




    function showInches(size) {
        if (size === "2XS") {
            setChest("32–34");
            setLength("24–25");
            setSleeve("6–7");
            setShoulder("14–15");
        } else if (size === "XS") {
            setChest("34–35");
            setLength("25–26");
            setSleeve("6–7");
            setShoulder("15–16");
        }
        else if (size === "S") {
            setChest("36–38");
            setLength("26–27");
            setSleeve("7–8");
            setShoulder("16–17");
        } else if (size === "M") {
            setChest("39–40");
            setLength("27–28");
            setSleeve("8–9");
            setShoulder("17–18");
        } else if (size === "L") {
            setChest("41–42");
            setLength("28–29");
            setSleeve("9–10");
            setShoulder("18–19");
        } else if (size === "XL") {
            setChest("43–44");
            setLength("29–30");
            setSleeve("10–11");
            setShoulder("19–20");
        } else if (size === "2XL") {
            setChest("45–47");
            setLength("30–31");
            setSleeve("11–12");
            setShoulder("20–21");
        } else if (size === "3XL") {
            setChest("48–50");
            setLength("31–32");
            setSleeve("12–13");
            setShoulder("21–22");
        } else {
            setChest("-");
            setLength("-");
            setSleeve("-");
            setShoulder("-");
        }
    }




    // Select Images 

    let [isWishListData, setIsWishListData] = useState(false)
    useEffect(() => {
        setIsWishListData(wishListtArr.some((item) => item.productNo === data.productNo))

    }, [wishListtArr])

    useEffect(() => {
        setIsWishListData(wishListtArr.some((item) => item.productNo === data.productNo))
    }, [])

    // let [selectColor, setSelectColor] = useState(data.selectColor ? data.selectColor : data.mainColor);
    let [selectColor, setSelectColor] = useState(null);
    let [selectColorImg, setSelectColorImg] = useState([]);

    useEffect(() => {
        if (data?.collectionsImgs && selectColor) {
            setSelectColorImg(data.collectionsImgs[selectColor] || []);
        } else if (data?.imgs) {
            setSelectColorImg(data.imgs);
        }
    }, [data, selectColor]);

    useEffect(() => {
        if (data) {
            const defaultColor = data.selectColor || data.mainColor;
            setSelectColor(defaultColor);

            if (data.collectionsImgs) {
                setSelectColorImg(data.collectionsImgs[defaultColor] || []);
            } else if (data.imgs) {
                setSelectColorImg(data.imgs);
            }
        }
    }, [data]);
    // let [selColorMainImg,setSelColorMainImg] = useState(data.collectionsImgs[selectColor][0] )


    function selecteColorFun(id, color) {
        setSelectColor(color)

        const updatedArr = dataArr.map((item) => item.productNo === id ? { ...item, selectColor: color, selectColorImg: data.collectionsImgs[color][0] } : item);
        setDataArr(updatedArr);

        const updatedData = updatedArr.find((item) => item.productNo === id);
        setData(updatedData);

        setAllProductsDatas(allProductsDatas.map(item => item.productNo === id ? { ...item, selectColor: color, selectColorImg: data.collectionsImgs[color][0] } : item))
    }



    useEffect(() => {
        if (selectColor && data?.collectionsImgs) {
            setSelectColorImg(data.collectionsImgs ? data.collectionsImgs[selectColor ? selectColor : data.mainColor] : data.imgs);
        }

    }, [selectColor]);


    useEffect(() => {
        if (selectColor && data?.collectionsImgs) {
            setSelectColorImg(data.collectionsImgs[selectColor] || []);
        }
    }, []);



    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);



    return (
        <>
            <Navbar filterDisplay={false} />
            <div className='paddingTop container d-sm-flex  my-sm-0 '>
                <div className="px-2 px-sm-0 imgContainer col-sm-6 d-flex">
                    <div className="seleteImgs d-flex gap-3 my-3 mt-sm-5">
                        {selectColorImg.map((img, i) => (
                            <div className='seleteImg' key={i}>
                                <img onMouseEnter={() => setShowMainimg(i)} key={i} src={img} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="crtImg  mx-auto my-auto my-sm-5 p-2 mx-3">
                        <img src={selectColorImg[showMainImg]} alt={data.name} />
                    </div>
                </div>
                <div className="ditailsContainer px-3 px-sm-3 col-sm-6 py-sm-4">
                    <h4 className='text-capitalize fw-bold ditailsTextColor fs-sm-4'>{data.selectDitails ? data.selectDitails : data.ditails}</h4>

                    <div className="priceAndBtn d-flex justify-content-between align-items-center">
                        <div className="price">
                            <img className='ratingImg mb-2' src={ratingImg(data.rating)} alt="" />
                            <div className="priceDitails py-2 mb-2">
                                <div className='m-0 p-0'>
                                    <p className='m-0'>
                                        {data.mrp !== data.price && data.mrp && <span className='fs-3 text-danger px-3'>({calculateOffer(data.selectMrp ? data.selectMrp : data.mrp, data.selectPrice ? data.selectPrice : data.price)}% off)</span>}
                                        <span className='fs-2 fw-bold'>₹{data.selectPrice ? getFormattedAmount(data.selectPrice) : getFormattedAmount(data.price)}</span>
                                    </p>
                                    {data.mrp !== data.price && data.mrp && <p className='mrpSingleCart fs-6 m-0 px-4 text-decoration-line-through'>M.R.P ₹{data.selectMrp ? getFormattedAmount(data.selectMrp) : getFormattedAmount(data.mrp)}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        data.catergory === "phone" ?
                            <div className="delivery row m-0 p-0">
                                <div className='col-6 col-sm-3 delivery-item d-flex   align-items-center'>
                                    <img className='' src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB562506492_.png" alt="" />
                                    <p>10 days Return & Exchange</p>
                                </div>
                                <div className='col-6 col-sm-3 delivery-item d-flex align-items-center'>
                                    <img className='' src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB562549966_.png" alt="" />
                                    <p>Free Deliery</p>
                                </div>
                                <div className='col-6 col-sm-3 delivery-item d-flex align-items-center'>
                                    <img className='' src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png" alt="" />
                                    <p>1 Year Warranty</p>
                                </div>
                                <div className='col-6 col-sm-3 delivery-item d-flex align-items-center'>
                                    <img className='' src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB562506657_.png" alt="" />
                                    <p>Pay on Delivery</p>
                                </div>

                                {<button onClick={() => addToCartFun(data.productNo, data)} className='addToCartBySingleCart btn btn-addToCart my-3'>Add To Cart</button>}

                            </div>
                            : data.catergory === "laptop" ?
                                <div className="delivery row m-0 p-0">
                                    <div className='col-6 col-sm-3 delivery-item d-flex   align-items-center'>
                                        <img className='' src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB562506492_.png" alt="" />
                                        <p>10 days Return & Exchange</p>
                                    </div>
                                    <div className='col-6 col-sm-3 delivery-item d-flex align-items-center'>
                                        <img className='' src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB562549966_.png" alt="" />
                                        <p>Free Deliery</p>
                                    </div>

                                    <div className='col-6 col-sm-3 delivery-item d-flex align-items-center'>
                                        <img className='' src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB562506657_.png" alt="" />
                                        <p>Pay on Delivery</p>
                                    </div>

                                    <div className='col-6 col-sm-3 delivery-item d-flex align-items-center'>
                                        <img className='' src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png" alt="" />
                                        <p>1 Year Warranty</p>
                                    </div>
                                    {<button onClick={() => addToCartFun(data.productNo, data)} className='addToCartBySingleCart btn btn-addToCart my-3'>Add To Cart</button>}

                                </div>
                                : data.catergory === "tv" ?
                                    <div className="delivery row m-0 p-0">
                                        <div className='col-6 col-sm-3 delivery-item d-flex   align-items-center'>
                                            <img className='' src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB562506492_.png" alt="" />
                                            <p>10 days Return & Exchange</p>
                                        </div>
                                        <div className='col-6 col-sm-3 delivery-item d-flex align-items-center'>
                                            <img className='' src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB562549966_.png" alt="" />
                                            <p>Free Deliery</p>
                                        </div>

                                        <div className='col-6 col-sm-3 delivery-item d-flex align-items-center'>
                                            <img className='' src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png" alt="" />
                                            <p>1 Year Warranty</p>
                                        </div>

                                        <div className='col-6 col-sm-3 delivery-item d-flex align-items-center'>
                                            <img className='' src="https://m.media-amazon.com/images/G/31/VAS/TrustWidget/Service._CB607276514_.png" alt="" />
                                            <p>Brand Installation</p>
                                        </div>

                                        {<button onClick={() => addToCartFun(data.productNo, data)} className='addToCartBySingleCart btn btn-addToCart my-3'>Add To Cart</button>}

                                    </div>
                                    :
                                    <div className="delivery row m-0 p-0">
                                        <div className='col-6 col-sm-3 delivery-item d-flex   align-items-center'>
                                            <img className='' src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB562506492_.png" alt="" />
                                            <p>10 days Return & Exchange</p>
                                        </div>
                                        <div className='col-6 col-sm-3 delivery-item d-flex align-items-center'>
                                            <img className='' src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB562549966_.png" alt="" />
                                            <p>Free Deliery</p>
                                        </div>
                                        <div className='col-6 col-sm-3 delivery-item d-flex align-items-center'>
                                            <img className='' src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB562506657_.png" alt="" />
                                            <p>Top Brand</p>
                                        </div>
                                        <div className='col-6 col-sm-3 delivery-item d-flex align-items-center'>
                                            <img className='' src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB562506657_.png" alt="" />
                                            <p>Pay on Delivery</p>
                                        </div>

                                        {<button onClick={() => addToCartFun(data.productNo, data)} className='addToCartBySingleCart btn btn-addToCart my-3'>Add To Cart</button>}

                                    </div>
                    }

                    {/* drees Size */}
                    {data.size && <div className='sizeContainer mb-4'>
                        <h5 className='mb-3'>Size</h5>
                        <div className='d-flex flex-wrap gap-2 align-items-center'>
                            {data.size.map((item, i) => (
                                <span onClick={() => {
                                    selectSize(data.productNo, item)
                                    showInches(item)
                                }
                                } className={`selectSize mx-2 ${data.selectSize === item ? "selSize" : ""}`} key={i}>{item}  </span>
                            ))}
                            {data.selectSize && <span>Select Size : {data.selectSize} </span>}
                        </div>
                        {data.selectSize && <div className='mt-4'>
                            <table className='inchesTable'>
                                <tr>
                                    <td>Chest</td> <td>{chest} inches</td>
                                </tr>

                                <tr>
                                    <td>Length</td> <td>{length} inches</td>
                                </tr>

                                <tr>
                                    <td>Sleeve</td> <td>{sleeve} inches</td>
                                </tr>

                                <tr>
                                    <td>Shoulder</td> <td>{shoulder} inches</td>
                                </tr>
                            </table>

                        </div>}
                        {data.addToCart && <span>is Add To Cart : {data.isaddToCart}</span>}
                    </div>}

                    {/* Select Color */}
                    {selectColor && <h6 className='my-2'> <span className='fw-blod'>Colour : </span> {data.selectColor ? data.selectColor : selectColor}</h6>}
                    {data.collectionsImgs && <div className='d-flex gap-1 gap-sm-3 my-3'>
                        {Object.entries(data.collectionsImgs).map(([color, images], i) => (
                            <div key={i} onClick={() => selecteColorFun(data.productNo, color)} style={{ cursor: "pointer" }} className={` ${selectColor === color ? "selecteBroder" : "unSelecteBroder"} border-black border-1 px-sm-3 px-1`}>
                                <div className='d-flex flex-column justify-content-between '>
                                    <div className='d-flex gap-2 flex-wrap selectColorsContainer align-items-center'>
                                        {
                                            <img src={images[0]} alt={color} width="100%" />
                                        }
                                    </div>
                                    <h6 className='text-center border-black border-1 m-0 align-items-end'>{color}</h6>
                                </div>
                            </div>
                        ))}
                    </div>}

                    {/* Select Storage */}

                    {Array.isArray(allStoreages) && <div>
                        <span className="d-block fs-6 fw-bold  mb-2 "> Memory Storage Capacity: {`${data.selectStorage ?
                            data.selectStorage >= 1000 ? "1 TB" : `${data.selectStorage} GB`
                            : data.MemoryStorageCapacity >= 1000 ? "1 TB" : `${data.MemoryStorageCapacity} GB`}`} </span>
                        <div className='d-flex gap-2 '>
                            {allStoreages.map((item, i) => <span onClick={() => selectStorageFun(data.productNo, item)} className={`p-2 borderDot ${parseInt(selectStorage) === parseInt(item) ? "selSize" : ""}`} key={i}>{item >= 1000 ? `1 TB` : `${item} GB`}</span>)}
                        </div>
                    </div>}

                    {/* Select RAM */}

                    {Array.isArray(allRams) && <div>
                        <span className="d-block fs-6 fw-bold  mb-2">RAM Memory Size: {data.MemoryStorageCapacity} GB</span>
                        <div className='d-flex gap-2'>
                            {allRams.map((item, i) => <span onClick={() => selectRamFun(data.productNo, item)} className={`p-2 borderDot ${parseInt(selectRam) === parseInt(item) ? "selSize" : ""}`} key={i}>{item} GB</span>)}
                        </div>
                    </div>}



                    {/* shoe Size */}

                    {data.selectSize && <h6 className='d-block'> <span className='fw-blod'>Size : </span> {data.selectSize}</h6>}
                    {data.shoeSize && <div className='d-flex flex-wrap gap-2'>
                        {data.shoeSize.map((item, i) => (
                            <span style={{ cursor: "pointer" }} className={`border border-1 py-1 px-2 rounded-2 ${data.selectSize === item ? "selSize" : ""}`} key={i} onClick={() => selectSize(data.productNo, item)}>{item} UK</span>
                        ))
                        }
                    </div>}

                    {/* select inches */}

                    {Array.isArray(allScreenSizesInches) && <div>
                        <span className="d-block fs-6 fw-bold  mb-2 ">Screen Sizes: {selectScreenSizes} inches</span>
                        <div className='d-flex flex-wrap gap-2 '>
                            {allScreenSizesInches.map((item, i) => <span onClick={() => selectScreenSizeFun(data.productNo, item)} className={`p-2 borderDot ${parseInt(selectScreenSizes) === parseInt(item) ? "selSize" : ""}`} key={i}>{item} inches</span>)}
                        </div>
                    </div>}


                    <div className='main-about my-3 mx-1 mx-sm-0'>

                        <h2 className='fs-3 fw-bolder'>Product details</h2>

                        {data.Brand && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2'>Brand</span>
                            <span className='text-end'>{data.Brand}</span>
                            {/* <span>{data.catergory}</span> */}
                        </div>}

                        {data.OperatingSystem && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2'>Operating System</span>
                            <span className='text-end'>{data.OperatingSystem}</span>
                        </div>}

                        {data.MemoryStorageCapacity && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2'>Memory Storage Capacity</span> <span className='text-end'>{`${data.selectStorage ?
                                data.selectStorage >= 1000 ? "1 TB" : `${data.selectStorage} GB`
                                : data.MemoryStorageCapacity >= 1000 ? "1 TB" : `${data.MemoryStorageCapacity >= 64 ? "GB" : data.MemoryStorageCapacity + " MB"}`}`}</span>
                        </div>}

                        {data.RAMMemorySize && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2'>RAM Memory Size</span> <span className='text-end'>{data.selectRam ? data.selectRam : data.RAMMemorySize} RAM</span>
                        </div>}

                        {data.ScreenSize && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2'>Screen Size</span> <span className='text-end'>{data.ScreenSize}</span>
                        </div>}

                        {data.Resolution && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2'>Resolution</span> <span className='text-end'>{selectResolution}</span>
                        </div>}

                        {data.color && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2'>Color</span> <span className='text-end'>{data.color}</span>
                        </div>}

                        {data.materialComposition && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2'>Material Composition</span> <span className='text-end'>{data.materialComposition}</span>
                        </div>}

                        {data.Pattern && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2'>Pattern </span> <span className='text-end'>{data.Pattern}</span>
                        </div>}

                        {data.fittype && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2 text-capitalize'>Fittype </span> <span className='text-end'>{data.fittype}</span>
                        </div>}

                        {data.sleevetype && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2 text-capitalize'>sleeve type </span> <span className='text-end'>{data.sleevetype}</span>
                        </div>}

                        {data.MaterialType && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2 text-capitalize'>Material Type</span> <span className='text-end'>{data.MaterialType}</span>
                        </div>}

                        {data.ClosureType && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2 text-capitalize'>Closure Type</span> <span className='text-end'>{data.ClosureType}</span>
                        </div>}

                        {data.HeelType && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2 text-capitalize'>Heel Type</span> <span className='text-end'>{data.HeelType}</span>
                        </div>}

                        {data.WaterResistanceLevel && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2 text-capitalize'>Water Resistance Level</span> <span className='text-end'>{data.WaterResistanceLevel}</span>
                        </div>}

                        {data.Sole && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2 text-capitalize'>Sole</span> <span className='text-end'>{data.Sole}</span>
                        </div>}

                        {data.Style && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2 text-capitalize'>Style</span> <span className='text-end'>{data.Style}</span>
                        </div>}

                        {/* Smart Watch */}

                        {data.BatteryCapacity && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2 text-capitalize'>Battery Capacity</span> <span className='text-end'>{data.BatteryCapacity}</span>
                        </div>}

                        {/* TV */}
                        {data.ScreenSizes && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2 text-capitalize'>Screen Sizes</span> <span className='text-end'>{selectScreenSizes} Inches</span>
                        </div>}

                        {data.refreshRate && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2 text-capitalize'>Refresh Rate</span> <span className='text-end'>{selectRefreshRate ? selectRefreshRate : data.refreshRate}</span>
                        </div>}

                        {data.DisplayTechnology && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2 text-capitalize'>Display Technology</span> <span className='text-end'>{data.DisplayTechnology}</span>
                        </div>}

                        {data.SpecialFeature && <div className='d-flex justify-content-between align-items-center '>
                            <span className='fw-blod px-2 text-capitalize flex-1'>Special Feature</span> <span className='flex-1 text-end'>{data.SpecialFeature.substring(0, 100)}</span>
                        </div>}

                        {data.ConnectivityTechnology && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2 text-capitalize'>Connectivity Technology</span> <span className='text-end'>{data.ConnectivityTechnology}</span>
                        </div>}

                        {data.IncludedComponents && <div className='d-flex justify-content-between align-items-center'>
                            <span className='fw-blod px-2 text-capitalize'>Included Components</span> <span className='text-end'>{data.IncludedComponents}</span>
                        </div>}




                    </div>
                    {data.about && data.about.length > 2 && <div className="about container my-3">
                        <h4 className='fs-3 fw-bolder'>About this item</h4>
                        <ul className='d-flex flex-column gap-3'>
                            {data.about.map((text, i) => <li key={i}>{text}</li>)}
                        </ul>
                    </div>}

                    <span className='likeBySingleCart' onClick={() => toggleWishList(data.productNo)}> {isWishListData ? < FaHeart size={"20"} color={"red"} /> : <FaRegHeart size={20} />} </span>
                </div >
            </div >


            <div>
                <div className='bg-white px-4 pt-3 position-relative'>
                    <Link to={`/${data.catergory}`}>
                        <h4 className='  px-sm-3 text-dark fs-sm-4 fst-italic fw-bolder mb-0'>Hot Picks in {data.catergory}</h4>
                    </Link>
                    <div className=' d-flex my-scroll-container ' ref={scrollRefrelativeCatergoryReverse}>
                        {[...catergoryItem].reverse().map((data, i) => <Cart2 data={data} key={i} />)}
                    </div>
                    {catergoryItem.length >= 6 &&
                        <>
                            <span onClick={() => scrollLeft(scrollRefrelativeCatergoryReverse)} className=' p-1  scrollLeft position-absolute top-50 start-0'><FaAnglesLeft size={25} /></span>
                            <span onClick={() => scrollRight(scrollRefrelativeCatergoryReverse)} className=' p-1 scrollRight position-absolute top-50 end-0'><FaAnglesRight size={25} /></span>
                        </>}
                </div>

                <div className='bg-white px-4 pt-3 my-3 position-relative'>
                    <div className=' d-flex my-scroll-container ' ref={scrollRefrelativeBrand}>
                        {brandItems.map((data, i) => <Cart data={data} key={i} />)}
                    </div>

                    {brandItems.length >= 6 &&
                        <>
                            <span onClick={() => scrollLeft(scrollRefrelativeBrand)} className=' p-1  scrollLeft position-absolute top-50 start-0'><FaAnglesLeft size={25} /></span>
                            <span onClick={() => scrollRight(scrollRefrelativeBrand)} className=' p-1 scrollRight position-absolute top-50 end-0'><FaAnglesRight size={25} /></span>
                        </>}
                </div>

                <div className='bg-white px-4 pt-3 position-relative'>
                    <Link to={`/${data.catergory}`}>
                        <h4 className='  px-sm-3 text-dark fs-sm-4 fst-italic fw-bolder mb-0'>{data.catergory}</h4>
                    </Link>
                    <div className=' d-flex my-scroll-container ' ref={scrollRefrelativeCatergory}>
                        {catergoryItem.map((data, i) => <Cart2 data={data} key={i} />)}
                    </div>
                    {catergoryItem.length >= 6 &&
                        <>
                            <span onClick={() => scrollLeft(scrollRefrelativeCatergory)} className=' p-1  scrollLeft position-absolute top-50 start-0'><FaAnglesLeft size={25} /></span>
                            <span onClick={() => scrollRight(scrollRefrelativeCatergory)} className=' p-1 scrollRight position-absolute top-50 end-0'><FaAnglesRight size={25} /></span>
                        </>}
                </div>
            </div>
            <Notifiction />
            <Footer />
        </>

    )
}

export default SingleCart