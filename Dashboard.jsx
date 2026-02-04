import React from "react";
function Dashboard() {
 return (
 <div className="text-center p-10">
<h1 className="text-3xl font-bold text-blue-600">Admin Dashboard</h1>
 <p className="mt-4 text-lg text-gray-600">
 Welcome to your admin panel. Here, you can manage products, orders, and customers efficiently.
</p>
 <div className="grid grid-cols-3 gap-6 mt-10">
<div className="bg-white p-6 rounded-lg shadow-md">
 <h2 className="text-2xl font-semibold">150 Products</h2>
<p className="text-gray-500">Total products listed</p>
 </div>
<div className="bg-white p-6 rounded-lg shadow-md">
     <h2 className="text-2xl font-semibold">85 Orders</h2>
 <p className="text-gray-500">Orders placed this month</p>
 </div>
 <div className="bg-white p-6 rounded-lg shadow-md">
 <h2 className="text-2xl font-semibold">230 Customers</h2>
 <p className="text-gray-500">Total registered customers</p>
 </div>
 </div>
 </div>
 );
}
export default Dashboard;