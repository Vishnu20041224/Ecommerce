import React from 'react'
// import Navbar from "../../../Navbar"
import Navbar from "../../Navbar"
import HeroPage from './HeroPage'
import Productes from './Productes'
import Footer from "../Footer/Footer"
const Home = () => {
    return (
        <>
            <Navbar filterDisplay={false}/>
            <HeroPage />
            <Productes />
            <Footer/>
        </>
    )
}

export default Home