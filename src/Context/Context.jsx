import { createContext, useEffect, useState, useRef } from "react";
import { v4 as uuid } from 'uuid';
import rating3 from '../assets/Rating/3.png'
import rating3off from '../assets/Rating/3.5.png'
import rating4 from '../assets/Rating/4.png'
import rating4off from '../assets/Rating/4.5.png'
import rating5 from "../assets/Rating/5.png"

//data
import phoneData from "../assets/Producted/Phone.json"
import LaptopData from "../assets/Producted/Laptop.json"
// import productsData from "../assets/Producted/Products.json"
import productsData from "../assets/Producted/Datas.json"
import { useParams } from 'react-router-dom'

let EcommerceContext = createContext()

export let ContextProvider = ({ children }) => {
    //data
    let [allProductsDatas, setAllProductsDatas] = useState(productsData)
    let [phoneDatas, setPhoneDatas] = useState(allProductsDatas.filter((item) => item.catergory === "phone"))
    // let [phoneDatas, setPhoneDatas] = useState(ramdomArray(allProductsDatas.filter((item) => item.catergory === "phone")))
    // console.log(phoneDatas);


    let [laptopDatas, setLaptopDatas] = useState(allProductsDatas.filter((item) => item.catergory === "laptop"))
    let [tshirtsDatas, setTshirtsDatas] = useState(allProductsDatas.filter((item) => item.catergory === "tshirt"))
    let [shoeDatas, setShoeDatas] = useState(allProductsDatas.filter((item) => item.catergory === "Shoe"))
    let [headPhonesData, setHeadPhoneData] = useState(allProductsDatas.filter((item) => item.catergory === "Headphone"))
    let [smartWatchData, setSmartWatchData] = useState(allProductsDatas.filter((item) => item.catergory === "SmartWatch"))
    let [tvData, setTvData] = useState(allProductsDatas.filter((item) => item.catergory === "tv"))
    let [shirtData, setShirtData] = useState(allProductsDatas.filter((item) => item.catergory === "shirt"))
    let [sportsData, setSportsData] = useState(allProductsDatas.filter((item) => item.catergory === "sports"))



    let [urlId, setUrlId] = useState(useParams())
    function searchLink() {
        const url = useParams();
        const product = allProductsDatas.find((data) => data.productNo === parseInt(url.id))
        setSearchText("")
    }

    // control
    let [isAddToCartOpen, setIsAddToCartOpen] = useState(false)
    let [isFilterOpen, setIsFilterOpen] = useState(true)

    let [singleCartId, setSingleCartId] = useState(null)

    let [searchText, setSearchText] = useState("")
    let [totalAmt, setTotalAmt] = useState(0)


    //storeage
    let [addToCartArr, setAddToCartArr] = useState(JSON.parse(localStorage.getItem("AddToCart")) || [])
    let [wishListtArr, setWishListArr] = useState(JSON.parse(localStorage.getItem("wishList")) || [])

    //Function
    let deliveryData = (rating) => {

        const days = [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
        ];

        // Months of the year
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        // Dates (1 to 31)
        const dates = Array.from({ length: 31 }, (_, i) => i + 1);

        let date = new Date()
        // let deliveryDate = days[date.getDate() + rating]
        let deliveryDay = days[date.getDay() + rating]

        let deliveryMonth = months[date.getMonth()]
        return `${deliveryDay} ${deliveryMonth}`
    }

    function ratingImg(rating) {
        if (rating <= 3) {
            return rating3
        }
        else if (rating > 3 && rating <= 3.5) {
            return rating3off
        }
        else if (rating > 3.5 && rating <= 4) {
            return rating4
        }
        else if (rating > 4 && rating <= 4.5) {
            return rating4off
        }
        else if (rating > 4.5 && rating <= 5) {
            return rating5
        }
        else {
            return rating3off
        }
    }


    function calculateOffer(mrp, price) {
        if (!mrp || mrp <= 0) return 0; // avoid division by zero
        return Math.round(((mrp - price) / mrp) * 100);
    }


    // getFormattedAmount
    function getFormattedAmount(amt) {
        return new Intl.NumberFormat("en-IN").format(amt);
    }


    // random
    function randomProduct(arr, length) {
        let randomIndexes = new Set();
        while (randomIndexes.size < length) {
            let randomNumber = Math.floor(Math.random() * arr.length);
            randomIndexes.add(randomNumber);
        }

        let randomPhones = [...randomIndexes].map(i => arr[i]);
        return randomPhones
    }

    // notification

    let [notification, setNotification] = useState([])
    let timeRef = useRef({})

    let newNoti = (msg, type, icone) => {
        let newNoti = {
            id: Date.now(),
            msg: msg,
            type: type,
            icone: icone
        }
        timeRef.current[newNoti.id] = setTimeout(() => removeNotification(newNoti.id), 5000)
        setNotification((pre) => [...pre, newNoti])
    }

    let removeNotification = (id) => {
        clearInterval(timeRef.current[id])
        delete timeRef.current[id]

        setNotification((preNot) => preNot.filter((not) => not.id !== id))
    }

    useEffect(() => {
        console.log(timeRef);

    }, [notification])



    function addToCartFun(id, data) {

        // Update product state immutably
        setAllProductsDatas((prev) =>
            prev.map((item) =>
                item.productNo === id ? { ...item, isAddToCart: true } : item
            )
        );
        // Create new cart item
        let newAddToCartData = { ...data, qty: 1, isAddToCart: true, addToCartID: uuid() };



        setAddToCartArr((prev) => {

            if (prev.some((item) => item.productNo === id)) {
                let sameData = prev.find((item) => item.productNo === id);

                let checkData = { ...data, qty: 1, isAddToCart: true };

                let sameDataKeys = Object.keys(sameData);
                let dataKeys = Object.keys(checkData);

                if (
                    prev.some(item =>
                        item.selectColor === data.selectColor &&
                        item.selectStorage === data.selectStorage &&
                        item.selectRam === data.selectRam &&
                        // T-shirt
                        item.selectSize === data.selectSize &&
                        // TV
                        item.selectScreenSize === data.selectScreenSize
                    )
                ) {
                    newNoti("This item is already in your cart", "redBtnColor", "stopwhite"); // ✅ call first
                    return prev; // ✅ return after notification
                }
            }
            newNoti("successfully Added to Cart", "greenBtnColor", "AddToCart3"); // ✅ call first
            return [...prev, newAddToCartData];

        });


    }

    function deleteAddToCartFun(id) {
        setAddToCartArr(addToCartArr.filter((item) => item.addToCartID !== id))
        setAllProductsDatas((prev) =>
            prev.map((item) =>
                item.productNo === id ? { ...item, isAddToCart: false } : item
            )
        );
        newNoti("Item Removed From Cart","redBtnColor")
    }

    // let array1 = ["a", "b", "c", "d", "e", "f", "g", "h"]

    function ramdomArray(arr) {

        let randomArrayNo = [];
        while (randomArrayNo.length < arr.length) {
            let randomNo = Math.floor(Math.random() * arr.length);

            if (!randomArrayNo.includes(randomNo)) {
                randomArrayNo.push(randomNo);
            }
        }

        let randomArray = randomArrayNo.map((i) => arr[i])
        return randomArray
    }

    // Search Function 

    let searchTextincludesArr = allProductsDatas.filter((item) => {

        let textIncludesArr = item.Brand.toLowerCase().includes(searchText.trim().toLowerCase()) ||
            item.name.toLowerCase().includes(searchText.trim().toLowerCase()) ||
            item.ditails.toLowerCase().includes(searchText.trim().toLowerCase()) ||
            item.catergory.toLowerCase().includes(searchText.trim().toLowerCase())
        return textIncludesArr
    })





    useEffect(() => {
        localStorage.setItem("AddToCart", JSON.stringify(addToCartArr));
    }, [addToCartArr]);


    // Load cart from localStorage on mount
    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("AddToCart")) || [];
        setAddToCartArr(localData);
        setWishListArr(JSON.parse(localStorage.getItem("wishList")) || [])
    }, []);


    function toggleWishList(id) {
        setAllProductsDatas((prev) =>
            prev.map((item) =>
                item.productNo === id ? { ...item, isWishList: !item.isWishList } : item
            )
        );

        setWishListArr((prev) => {
            const exists = prev.find((item) => item.productNo === id);
            if (exists) {
                // remove from wishlist
                newNoti("Remove From Wish List", "redBtnColor", "heartbrackwhite")
                return prev.filter((item) => item.productNo !== id);

            } else {
                // add to wishlist
                const wishListData = allProductsDatas.find((item) => item.productNo === id);
                newNoti("successfully Added to Wish List", "greenBtnColor", "heartwhite")
                return [...prev, { ...wishListData, isWishList: true }];
            }
        });
    }





    useEffect(() => {
        localStorage.setItem("wishList", JSON.stringify(wishListtArr))
    }, [wishListtArr])

    return (
        <EcommerceContext.Provider value={
            {
                isAddToCartOpen, setIsAddToCartOpen
                , deliveryData, ratingImg,
                singleCartId, setSingleCartId,
                isFilterOpen, setIsFilterOpen,
                searchText, setSearchText,
                addToCartArr, setAddToCartArr,
                wishListtArr, setWishListArr,

                addToCartFun, deleteAddToCartFun,  // add and delete  function
                toggleWishList,
                calculateOffer, getFormattedAmount,
                ramdomArray, randomProduct,
                searchTextincludesArr,             // search Array  
                totalAmt, setTotalAmt,             // add to cart total amount
                urlId, setUrlId, searchLink,         // useParem     
                notification, setNotification,                      // notification                  
                newNoti, removeNotification,
                //data
                phoneDatas, setPhoneDatas,
                laptopDatas, setLaptopDatas,
                tshirtsDatas, setTshirtsDatas,
                shoeDatas, setShoeDatas,
                headPhonesData, setHeadPhoneData,
                smartWatchData, setSmartWatchData,
                tvData, setTvData,
                shirtData, setShirtData,
                sportsData, setSportsData,

                allProductsDatas, setAllProductsDatas
            }}>
            {children}
        </EcommerceContext.Provider>
    )
}

export default EcommerceContext