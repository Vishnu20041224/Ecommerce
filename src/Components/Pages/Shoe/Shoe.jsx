import React, { useContext } from 'react'
import Navbar from '../../Navbar'
import EcommerceContext from '../../../Context/Context'
import FilterProducte from "../Filter/FilterProducte"
import Cart from "../../Carts/Cart/Cart"
import Footer from "../Footer/Footer"
import Empty from '../EmptyPage/Empty'
import EmptyBox from "../../../assets/Icone/box.png"
import Notifiction from '../Notification/Notifiction'

const Shoe = () => {

    let {shoeDatas, setShoeDatas ,isFilterOpen ,allProductsDatas} = useContext(EcommerceContext) 
    return (
        <>
            <Navbar filterDisplay={true}/>
            <div className="paddingTop d-flex container-fluid ">
                {isFilterOpen && <FilterProducte data={allProductsDatas.filter(item => item.catergory === "Shoe")} set={setShoeDatas} />}
                <div className=" d-flex flex-wrap justify-content-between ">
                    {shoeDatas.length !== 0 ?
                        shoeDatas.map((item, i) => (
                            <Cart key={i} data={item} />))
                        : <Empty img={EmptyBox} text={"No Product"}/>
                    }
                </div>
            </div>
            <Notifiction/>
            <Footer/>
        </>
    )
}

export default Shoe