
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";

<button onClick={placeOrder}>Place Order</button>

export default function App(){
 return(<div><Navbar/>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/shop" element={<Products/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/details/:id" element={<Details/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/checkout" element={<Checkout/>}/>


 </Routes></div>);
}
