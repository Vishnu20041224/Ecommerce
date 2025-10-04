import React from 'react'
import {useContext} from "react"
import Navbar from '../../Navbar'
import GadgetCart from '../../Carts/Gadget/GadgetCart'
import FilterProducte from '../Filter/FilterProducte';
import EcommerceContext from '../../../Context/Context'
import Footer from "../Footer/Footer"
import Empty from '../EmptyPage/Empty'
import EmptyBox from "../../../assets/Icone/box.png"
import Notifiction from '../Notification/Notifiction'

const SmartWatch = () => {

    let { isFilterOpen, smartWatchData, setSmartWatchData, allProductsDatas, setAllProductsDatas, ramdomArray } = useContext(EcommerceContext)


    return (
        <>
            <Navbar filterDisplay={true} />
            <div className="container-fluid paddingTop d-flex" >
                {isFilterOpen && <div className=' p-0'>
                    <FilterProducte data={allProductsDatas.filter(item => item.catergory === "SmartWatch")} set={setSmartWatchData} />
                </div>}
                <div className='p-0 GadgetCart'>
                    {smartWatchData.length !== 0 ?
                        smartWatchData.map((item, i) => (
                            <GadgetCart data={item} key={i} />))
                        : <Empty img={EmptyBox} text={"No Product"}/>
                    }
                </div>
            </div>
            <Notifiction/>
            <Footer/>
        </>
    )
}

export default SmartWatch