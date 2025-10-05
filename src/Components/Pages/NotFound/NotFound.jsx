import Navbar from '../../Navbar'
import Empty from '../EmptyPage/Empty'
import Footer from '../Footer/Footer'
import NotFoundIcone from "../../../assets/Icone/NotFoundIcone.png"
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <>
    <Navbar/>
    <Link to={"/"}>
    <Empty img={NotFoundIcone} text={"Page not found! But don’t worry, amazing deals are just a click away."}/>
    </Link>
    <Footer/>
    </>
  )
}

export default NotFound