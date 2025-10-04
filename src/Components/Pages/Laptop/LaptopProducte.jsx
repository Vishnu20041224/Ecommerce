import { useContext } from 'react'
import Navbar from '../../Navbar'
import EcommerceContext from '../../../Context/Context'
import LaptopData from "../../../assets/Producted/Laptop.json"
import Datas from "../../../assets/Producted/Datas.json"
import FilterProducte from '../Filter/FilterProducte'
import GadgetCart from '../../Carts/Gadget/GadgetCart'
import Footer from '../Footer/Footer'
import Empty from '../EmptyPage/Empty'
import EmptyBox from "../../../assets/Icone/box.png"
import Notifiction from '../Notification/Notifiction'

const LaptopProducte = () => {

    let { isFilterOpen, laptopDatas, setLaptopDatas,allProductsDatas ,setAllProductsDatas } = useContext(EcommerceContext)

    return (
        <>
            <Navbar filterDisplay={true}/>
            <div className="paddingTop container-fluid d-flex">
                {isFilterOpen && <div className="p-0">
                    <FilterProducte data={allProductsDatas.filter(item=>item.catergory === "laptop")} set={setLaptopDatas} />
                </div>}
                <div className="GadgetCart p-0">
                    {laptopDatas.length !== 0 ?
                        laptopDatas.map((item, i) => (
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

export default LaptopProducte