import React, { useContext, useEffect, useState } from 'react'
import "./FilterProducte.css"
import EcommerceContext from '../../../Context/Context'
import { IoClose } from "react-icons/io5";

const FilterProducte = ({ data, set }) => {
    let { phoneDatas, setSearchText, searchText, setIsFilterOpen, ramdomArray } = useContext(EcommerceContext)



    //BRAND
    let allBrand = data.map((item) => item.Brand)
    let brands = [...new Set(allBrand.sort())]

    //PRICE
    let prices = data.map((item, i) => parseInt(item.price))
    let [minPrice, setMinPrice] = useState(Math.min(...prices))
    let [maxPrice, setMaxPrice] = useState(Math.max(...prices))
    let [curentPrice, setCurrentPrice] = useState(maxPrice)



    //RAM
    let allRam = data.map((item) => item.RAMMemorySize)
    let rams = [...new Set(allRam.sort((a, b) => a - b))]

    //Storage
    let allStorage = data.map((item) => parseInt(item.MemoryStorageCapacity))
    let storages = [...new Set(allStorage.sort((a, b) => a - b))]

    //Color
    let allColors = data.map((item) => item.color ? item.color : item.mainColor)
    let colors = [...new Set(allColors.sort())]

    //Gender
    let allGender = data.map((item) => item.gender)
    let genders = [...new Set(allGender.sort())]

    let allStyle = data.map((item) => item.Style)
    let style = [...new Set(allStyle.sort())]
    // tv inches

    let allInches = data.map((item) => parseInt(item.ScreenSizes))
    let inches = [...new Set(allInches.sort((a, b) => a - b))]

    // Resolution

    let allResolution = data.map((item) => item.Resolution)
    let resolutions = [...new Set(allResolution.sort())]

    // refreshRate
    let allRefreshRate = data.map((item) => item.refreshRate)
    let refreshRate = [...new Set(allRefreshRate.sort())]

    // tshirt & shirt

    let allPatten = data.map((item) => item.Pattern)
    let patterns = [...new Set(allPatten.sort())]

    let allFittype = data.map((item) => item.fittype)
    let fittypes = [...new Set(allFittype.sort())]

    let allSleevetype = data.map((item) => item.sleevetype)
    let sleevetypes = [...new Set(allSleevetype.sort())]

    // sport

   let allSport = data.map((item)=>item.Sport)
   let sport = [...new Set(allSport.sort())]

    //Function

    //Brand
    let [selectBrands, setSelectBrand] = useState([])

    //ram
    let [selectRam, setSelectRam] = useState([])


    //Storage
    let [selectStorage, setSelectStorage] = useState([])

    //genders
    let [selectGenders, setSelectGenders] = useState([])

    //color
    let [selectColor, setSelectColor] = useState([])

    let [selectStyle, setSelectStyle] = useState([])

    // Tv
    let [selectInches, setSelectInches] = useState([])
    let [selectResolution, setSelectResolution] = useState([])
    let [selectRefreshRate, setSelectRefreshRate] = useState([])

    // shirt & t-shirt

    let [selectPatterns, setSelectPatterns] = useState([])
    let [selectFittype, setSelectFittype] = useState([])
    let [selectSleevetypes, setSleevetypes] = useState([])

    // sport 
    let [selectSport,setSelectSport] = useState([])

    let filterData

    useEffect(() => {
        filterData = data.filter((item) => {
            let selBrand = selectBrands.length === 0 || selectBrands.includes(item.Brand)
            let selRam = selectRam.length === 0 || selectRam.includes(item.RAMMemorySize)
            let selStorage = selectStorage.length === 0 || selectStorage.includes(item.MemoryStorageCapacity)
            let selPrice = curentPrice >= parseInt(item.price)
            let selGenders = selectGenders.length === 0 || selectGenders.includes(item.gender)
            let selColor = selectColor.length === 0 || selectColor.includes(item.color || item.mainColor)
            let selStyle = selectStyle.length === 0 || selectStyle.includes(item.Style)
            let selInches = selectInches.length === 0 || selectInches.includes(item.ScreenSizes)
            let selResolutions = selectResolution.length === 0 || selectResolution.includes(item.Resolution)
            let selRefreshRate = selectRefreshRate.length === 0 || selectRefreshRate.includes(item.refreshRate)
            let selPattern = selectPatterns.length === 0 || selectPatterns.includes(item.Pattern)
            let selFitType = selectFittype.length === 0 || selectFittype.includes(item.fittype)
            let selSleeveType = selectSleevetypes.length === 0 || selectSleevetypes.includes(item.sleevetype)
            let selSport = selectSport.length === 0 || selectSport.includes(item.Sport)
            //Serach


            return selBrand && selRam && selStorage && selPrice && selGenders && selColor && selStyle && selInches && selResolutions && selRefreshRate && selPattern && selFitType && selSleeveType && selSport
        })


        set(filterData)


    }, [selectBrands, selectRam, selectStorage, curentPrice, searchText, selectGenders, selectColor, selectStyle, selectInches, selectResolution, selectRefreshRate,selectPatterns,selectFittype,selectSleevetypes,selectSport])


    return (
        <>
            <div className="filterProducte px-3 d-inline-block py-5">

                <span className='fs-5 filterName'>Filter</span>
                <span className='closeByFilter' onClick={() => setIsFilterOpen(false)}><IoClose size={20} color='red'/></span>

                <div className="brands pt-4 pt-sm-0 mb-4 mt-5 mt-sm-0">
                    <h5 className='fw-bold mt-3 fs-6 m-0'>Brand</h5>
                    {brands.map((item, i) => (
                        <label key={i} className='py-0 d-block '>
                            <input value={item} type='checkbox' onChange={() => setSelectBrand(selectBrands.includes(item) ? selectBrands.filter((brand) => brand !== item) : [...selectBrands, item])} />
                            {item}
                        </label>
                    )
                    )}
                </div>
                <div className="priceRange mb-4">
                    <h5 className='fw-bold fs-6 m-0'>Price</h5>
                    <input className='priceRangeInput' type="range" onChange={(e) => setCurrentPrice(e.target.value)} value={curentPrice} min={minPrice} max={maxPrice} />
                    <div className=' d-flex justify-content-between align-items-center'>
                        <span>₹{minPrice}</span>
                        <span>₹{curentPrice}</span>
                    </div>
                </div>

                {genders.length > 1 && <div className="rams mb-4">
                    <h5 className='fw-bold fs-6 m-0'>Gender</h5>

                    {genders.map((item, i) => (
                        <label key={i} className='py-0 d-block'>
                            <input type='checkbox' onChange={() => setSelectGenders(selectGenders.includes(item) ? selectGenders.filter(gen => gen !== item) : [...selectGenders, item])} />
                            {item}
                        </label>
                    ))}
                </div>}


                {rams.length > 1 && <div className="rams mb-4">
                    <h5 className='fw-bold fs-6 m-0'>RAM Memory </h5>

                    {rams.map((item, i) => (
                        <label key={i} className='py-0 d-block'>
                            <input type='checkbox' onChange={() => setSelectRam(selectRam.includes(item) ? selectRam.filter(ram => ram !== item) : [...selectRam, item])} />
                            {item} RAM
                        </label>
                    ))}
                </div>}

                {storages.length > 1 && <div className="storage mb-4">
                    <h5 className='fw-bold fs-6 m-0'>Memory Storage </h5>

                    {storages.map((item, i) => (
                        <label key={i} className='py-0 d-block'>
                            <input type='checkbox' onChange={() => setSelectStorage(selectStorage.includes(item) ? selectStorage.filter(storage => storage !== item) : [...selectStorage, item])} />
                            {item >= 1000 ? 1 : item} {item < 1000 ? "GB" : "TB"} Storage
                        </label>
                    ))}
                </div>}

                {/* sport */}

                {sport.length > 2 && <div className="storage mb-4">
                    <h5 className='fw-bold fs-6 m-0'>Sport</h5>

                    {sport.map((item, i) => (
                        <label key={i} className='py-0 d-block text-capitalize'>
                            <input type='checkbox' onChange={() => setSelectSport(selectSport.includes(item) ? selectSport.filter(col => col !== item) : [...selectSport, item])} />
                            {item}
                        </label>
                    ))}
                </div>}

                {colors.length > 2 && <div className="storage mb-4">
                    <h5 className='fw-bold fs-6 m-0'>Colors</h5>

                    {colors.map((item, i) => (
                        <label key={i} className='py-0 d-block text-capitalize'>
                            <input type='checkbox' onChange={() => setSelectColor(selectColor.includes(item) ? selectColor.filter(col => col !== item) : [...selectColor, item])} />
                            {item}
                        </label>
                    ))}
                </div>}
                {/* Tv */}
                {inches.length > 1 && <div className="storage mb-4">
                    <h5 className='fw-bold fs-6 m-0'>TV Inches</h5>

                    {inches.map((item, i) => (
                        <label key={i} className='py-0 d-block text-capitalize'>
                            <input type='checkbox' onChange={() => setSelectInches(selectInches.includes(item) ? selectInches.filter(col => col !== item) : [...selectInches, item])} />
                            {item} inches
                        </label>
                    ))}
                </div>}

                {resolutions.length > 1 && <div className="storage mb-4">
                    <h5 className='fw-bold fs-6 m-0'>Resolutions</h5>

                    {resolutions.map((item, i) => (
                        <label key={i} className='py-0 d-block text-capitalize'>
                            <input type='checkbox' onChange={() => setSelectResolution(selectResolution.includes(item) ? selectResolution.filter(col => col !== item) : [...selectResolution, item])} />
                            {item}
                        </label>
                    ))}
                </div>}

                {refreshRate.length > 1 && <div className="storage mb-4">
                    <h5 className='fw-bold fs-6 m-0'>Resolutions</h5>

                    {refreshRate.map((item, i) => (
                        <label key={i} className='py-0 d-block text-capitalize'>
                            <input type='checkbox' onChange={() => setSelectRefreshRate(selectRefreshRate.includes(item) ? selectRefreshRate.filter(col => col !== item) : [...selectRefreshRate, item])} />
                            {item}
                        </label>
                    ))}
                </div>}

                {patterns.length > 1 && <div className="storage mb-4">
                    <h5 className='fw-bold fs-6 m-0'>Patterns</h5>

                    {patterns.map((item, i) => (
                        <label key={i} className='py-0 d-block text-capitalize'>
                            <input type='checkbox' onChange={() => setSelectPatterns(selectPatterns.includes(item) ? selectPatterns.filter(col => col !== item) : [...selectPatterns, item])} />
                            {item}
                        </label>
                    ))}
                </div>}

                 {fittypes.length > 1 && <div className="storage mb-4">
                    <h5 className='fw-bold fs-6 m-0'>Fit</h5>

                    {fittypes.map((item, i) => (
                        <label key={i} className='py-0 d-block text-capitalize'>
                            <input type='checkbox' onChange={() => setSelectFittype(selectFittype.includes(item) ? selectFittype.filter(col => col !== item) : [...selectFittype, item])} />
                            {item}
                        </label>
                    ))}
                </div>}

                 {sleevetypes.length > 1 && <div className="storage mb-4">
                    <h5 className='fw-bold fs-6 m-0'>Sleeve</h5>

                    {sleevetypes.map((item, i) => (
                        <label key={i} className='py-0 d-block text-capitalize'>
                            <input type='checkbox' onChange={() => setSleevetypes(selectSleevetypes.includes(item) ? selectSleevetypes.filter(col => col !== item) : [...selectSleevetypes, item])} />
                            {item}
                        </label>
                    ))}
                </div>}

                {/* shoe */}
                {style.length > 2 && <div className="storage mb-4">
                    <h5 className='fw-bold fs-6 m-0'>Style Shoes</h5>

                    {style.map((item, i) => (
                        <label key={i} className='py-0 d-block text-capitalize'>
                            <input type='checkbox' onChange={() => setSelectStyle(selectStyle.includes(item) ? selectStyle.filter(col => col !== item) : [...selectStyle, item])} />
                            {item}
                        </label>
                    ))}
                </div>}

            </div>
        </>
    )
}

export default FilterProducte