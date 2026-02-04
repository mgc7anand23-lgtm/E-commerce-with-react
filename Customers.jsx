import React from "react";
const customers = [
 { id: 1, name: "Bala", email: "bala@example.com" },
 { id: 2, name: "Raja Kumar", email: "raja@example.com" },
 { id: 3, name: "Ram Kumar", email: "ram@example.com" },
];
function Customers() {
 return (
 <div className="text-center p-10">
 <h1 className="text-3xl font-bold text-blue-600">Customers List</h1>
 <p className="mt-4 text-lg text-gray-600">View details of all registered customers.</p>
<ul className="mt-6">
 {customers.map((customer) => (
 <li key={customer.id} className="bg-white p-4 border rounded-lg shadow-md mt-3">
 <p className="text-lg font-semibold">{customer.name}</p>
 <p className="text-gray-500">{customer.email}</p>
 </li>
))}
 </ul>
 </div>
);}
export default Customers;
