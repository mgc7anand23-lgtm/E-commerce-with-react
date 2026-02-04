import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
 return (
 <nav className="bg-gray-900 text-white p-4 flex justify-center gap-6">
     <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")}>Dashboard</NavLink>
 <NavLink to="/products" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")}>Products</NavLink>
 <NavLink to="/orders" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")}>Orders</NavLink>
 <NavLink to="/customers" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")}>Customers</NavLink>
 <NavLink to="/profile/Admin123" className={({ isActive }) => (isActive ? "text-yellow-400" : "text-white")}>Profile</NavLink>
 </nav>
);
}
export default Navbar;