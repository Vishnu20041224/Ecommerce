import { useContext } from 'react'
import Navbar from '../../Navbar'
import phoneData from "../../../assets/Producted/Phone.json"
import Datas from "../../../assets/Producted/Datas.json"
import Cart from '../../Carts/Cart/Cart'
import GadgetCart from '../../Carts/Gadget/GadgetCart'
import SingleCart from '../../Carts/SingleCart/SingleCart'
import FilterProducte from '../Filter/FilterProducte';
import EcommerceContext from '../../../Context/Context'
import Footer from "../Footer/Footer"
import Empty from '../EmptyPage/Empty'
import EmptyBox from "../../../assets/Icone/box.png"
import Notifiction from '../Notification/Notifiction'


const PhoneProducte = () => {

  let { notification, setNotification,                      // notification                  
    newNoti, removeNotification, isFilterOpen, phoneDatas, setPhoneDatas, allProductsDatas, setAllProductsDatas, ramdomArray } = useContext(EcommerceContext)

  return (
    <>
      <Navbar filterDisplay={true} />
      <div className="container-fluid paddingTop d-flex" >
        {isFilterOpen && <div className=' p-0'>
          <FilterProducte data={allProductsDatas.filter(item => item.catergory === "phone")} set={setPhoneDatas} />
        </div>}
        <div className='p-0 GadgetCart '>
          {phoneDatas.length !== 0 ?
            phoneDatas.map((item, i) => (
              <GadgetCart data={item} key={i} />))
            : <Empty img={EmptyBox} text={"No Product"} />
          }
        </div>
      </div>
      <Notifiction />
      <Footer />
    </>
  )
}

export default PhoneProducte