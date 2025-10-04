import React, { useContext } from 'react'
import Navbar from '../../Navbar'
import EcommerceContext from '../../../Context/Context'
import Cart from  "../../Carts/Cart/Cart"
import Footer from "../Footer/Footer"
import Empty from '../EmptyPage/Empty'
import emptyIcone from "../../../assets/Icone/empty.png"
import Notifiction from '../Notification/Notifiction'

const LikeList = () => {

  let {wishListtArr} = useContext(EcommerceContext)
  return (
    <>
    <Navbar/>
    <div className="paddingTop d-flex flex-wrap">

      {wishListtArr.length !==0 ? wishListtArr.map((data,i)=> <Cart data={data} key={i}/>) : <Empty img={emptyIcone} text={"No Wish List Product"}/>}
    </div>
    <Notifiction/>
    <Footer/>

    </>
  )
}
export default LikeList