import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Orders from "./Orders";
import Customers from "./Customers";
import Profile from "./Profile";
import NotFound from "./NotFound";
function Header() {
 return (
<div className="flex flex-col min-h-screen bg-gray-100">
 <BrowserRouter>
<Navbar />
 <Routes>
 <Route path="/" element={<Dashboard />} />
 <Route path="/products" element={<Products />} />
 <Route path="/orders" element={<Orders />} />
 <Route path="/customers" element={<Customers />} />
 <Route path="/profile/:adminName" element={<Profile />} />
   <Route path="*" element={<NotFound />} /> 
 </Routes>
 </BrowserRouter>
 </div>
);}
export default Header;