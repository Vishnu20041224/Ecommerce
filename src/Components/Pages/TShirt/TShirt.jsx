import Cart from "../../Carts/Cart/Cart"
import FilterProducte from "../Filter/FilterProducte"
import Navbar from "../../Navbar"
import phoneData from "../../../assets/Producted/Phone.json"
import Datas from "../../../assets/Producted/Datas.json"

import "./TShirt.css"
import { useContext } from "react"
import EcommerceContext from "../../../Context/Context"
import { HiH1 } from "react-icons/hi2"
import Footer from "../Footer/Footer"
import Empty from '../EmptyPage/Empty'
import EmptyBox from "../../../assets/Icone/box.png"
import Notifiction from '../Notification/Notifiction'

const TShirt = () => {
let {setPhoneDatas ,isFilterOpen ,tshirtsDatas, setTshirtsDatas ,allProductsDatas ,setAllProductsDatas} = useContext(EcommerceContext)

return (
    <>
      <Navbar filterDisplay={true} />
      <div className="paddingTop d-flex container-fluid ">
       {isFilterOpen && <FilterProducte data={allProductsDatas.filter(item => item.catergory === "tshirt")} set={setTshirtsDatas} />}
        <div className="d-flex flex-wrap ">
          {tshirtsDatas.length !== 0 ?
           tshirtsDatas.map((item,i)=>(
             <Cart key={i} data={item}/>))
                        : <Empty img={EmptyBox} text={"No Product"}/>
          }
        </div>
      </div>
      <Notifiction/>
      <Footer/>

    </>
  )
}

export default TShirt