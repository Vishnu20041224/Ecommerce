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

const Tv = () => {
    let { isFilterOpen, tvData, setTvData, allProductsDatas, setAllProductsDatas, ramdomArray } = useContext(EcommerceContext)
    return (
        <>
            <Navbar filterDisplay={true} />
            <div className="container-fluid paddingTop d-flex" >
                {isFilterOpen && <div className=' p-0'>
                    <FilterProducte data={allProductsDatas.filter(item => item.catergory === "tv")} set={setTvData} />
                </div>}
                <div className='p-0 GadgetCart'>
                    {tvData.length !== 0 ?
                        tvData.map((item, i) => (
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

export default Tv