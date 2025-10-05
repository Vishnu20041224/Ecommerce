import { Route, Routes } from "react-router-dom";
// import HeroPage from "./Components/HeroPage";
import Home from "./Components/Pages/Home/Home";
// import Navbar from "./Components/Navbar";
// import Productes from "./Components/Productes";
import PhoneProducte from "./Components/Pages/Phone/PhoneProducte";
import AddToCart from "./Components/Pages/AddToCart/AddToCart";
import LikeList from "./Components/Pages/WishList/LikeList";
import Contact from "./Components/Pages/Contact/Contact";
import SingleCart from "./Components/Carts/SingleCart/SingleCart";
import LaptopProducte from "./Components/Pages/Laptop/LaptopProducte";
import TShirt from "./Components/Pages/TShirt/TShirt";
import Shoe from "./Components/Pages/Shoe/Shoe";
import HeadPhone from "./Components/Pages/HeadPhone/HeadPhone";
import SmartWatch from "./Components/Pages/Watch/SmartWatch";
import Tv from "./Components/Pages/Tv/Tv"
import Shirt from "./Components/Pages/Shirt/Shirt";
import Sport from "./Components/Pages/Sport/Sport";
import NotFound from "./Components/Pages/NotFound/NotFound";

function App() {

  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<PhoneProducte />} path="/phone" />
        <Route element={<LaptopProducte />} path="/laptop" />
        <Route element={<TShirt/>} path="/tshirt" />
        <Route element={<Shoe/>} path="/shoe" />
        <Route element={<HeadPhone/>} path="/headphone" />
        <Route element={<SmartWatch/>} path="/smartWatch" />
        <Route element={<Tv/>} path="/tv"/>
        <Route element={<Sport/>} path="/sport"/>

        <Route element={<SingleCart />} path={`/:Producte/:id/details`} />
        <Route element={<AddToCart />} path="/addtocart" />
        <Route element={<LikeList />} path="/likelist" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Shirt/>} path="/shirt" />
        <Route element={<NotFound/>} path="*"/>
      </Routes>
    </>
  )
}

export default App
