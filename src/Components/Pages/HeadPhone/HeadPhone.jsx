import React, { useContext } from 'react'
import Navbar from "../../Navbar"
import FilterProducte from '../Filter/FilterProducte'
import EcommerceContext from '../../../Context/Context'
import GadgetCart from '../../Carts/Gadget/GadgetCart'
import Footer from "../Footer/Footer"
import Empty from '../EmptyPage/Empty'
import EmptyBox from "../../../assets/Icone/box.png"
import Notifiction from '../Notification/Notifiction'

const HeadPhone = () => {

    let {allProductsDatas , setHeadPhoneData, headPhonesData ,isFilterOpen} = useContext(EcommerceContext)

    return (
        <>
            <Navbar filterDisplay={true}/>
            <div className='paddingTop d-flex container-fluid'>
                {isFilterOpen && <FilterProducte data={allProductsDatas.filter((item)=>item.catergory === "Headphone")} set={setHeadPhoneData}/>}
              <div className=" d-flex flex-wrap">
                    {headPhonesData.length !== 0 ?
                        headPhonesData.map((item, i) => (
                            <GadgetCart key={i} data={item} />))
                        : <Empty img={EmptyBox} text={"No Product"}/>
                    }
                </div>
            </div>
            <Notifiction/>
            <Footer/>
        </>
    )
}

export default HeadPhone