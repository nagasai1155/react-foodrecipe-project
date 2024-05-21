import React from 'react'
import Home from './Home'
import Itemslist from './Itemslist'
import Information from './Information'
import Cart from './Cart'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import "./App.css"
function Header(){
    return(
        <>
        <Link to="home" >Home</Link>
        <Link to="itemlist" >listitems</Link>
        <Link to="cart" >cart</Link>
        <Link to="info" >information</Link>
        </>
    )
}
function Mainrouting() {
  return (
   <>
   <div class="mainrouting">
   <BrowserRouter>
   <Header></Header>
   
   <Routes>
  
  <Route path='home' element={<Home></Home>}  ></Route>
  <Route path='itemlist' element={<Itemslist></Itemslist>}  ></Route>
  <Route path='cart' element={<Cart></Cart>}  ></Route>
  <Route path='info' element={<Information></Information>}  ></Route>


   </Routes>
   
   </BrowserRouter>
   
   </div>
   </>
  )
}

export default Mainrouting