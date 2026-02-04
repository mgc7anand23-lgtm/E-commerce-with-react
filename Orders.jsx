import React from "react";

const orderList = [
 { id: 101, customer: "Bala", total: "$250", status: "Shipped" },
 { id: 102, customer: "Raja Kumar", total: "$120", status: "Pending" },
 { id: 103, customer: "Ram Kumar", total: "$500", status: "Delivered" },
];

function Orders() {
 return (
 <div className="text-center p-10">
 <h1 className="text-3xl font-bold text-blue-600">Order Management</h1>
<p className="mt-4 text-lg text-gray-600">Track customer orders and update their status.</p>
 <table className="table-auto w-full mt-6 border-collapse border border-gray-300">
 <thead>
 <tr className="bg-gray-200">
 <th className="border p-3">Order ID</th>
 <th className="border p-3">Customer</th>
 <th className="border p-3">Total</th>
 <th className="border p-3">Status</th>
 </tr></thead><tbody>
 {orderList.map((order) => (
 <tr key={order.id} className="bg-white hover:bg-gray-100">
<td className="border p-3">{order.id}</td>
<td className="border p-3">{order.customer}</td>
 <td className="border p-3">{order.total}</td>
 <td className={`border p-3 ${order.status === "Shipped" ? "text-green-600" : "text-red-600"}`}>
 {order.status}
 </td></tr>
 ))}
 </tbody></table></div>);}
export default Orders;

