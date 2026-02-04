import React from "react";
const productList = [
 { id: 1, name: "iPhone 15", price: "$999", stock: 25 },
 { id: 2, name: "Samsung Galaxy S23", price: "$899", stock: 40 },
 { id: 3, name: "MacBook Air M2", price: "$1199", stock: 15 },
];
function Products() {
 return (
 <div className="text-center p-10">
 <h1 className="text-3xl font-bold text-blue-600">Product Management</h1>
<p className="mt-4 text-lg text-gray-600">View and manage all listed products.</p>
<table className="table-auto w-full mt-6 border-collapse border border-gray-300">
 <thead>
 <tr className="bg-gray-200">
 <th className="border p-3">Product Name</th>
<th className="border p-3">Price</th>
 <th className="border p-3">Stock</th>
</tr>
</thead>
<tbody>
 {productList.map((product) => (
 <tr key={product.id} className="bg-white hover:bg-gray-100">
 <td className="border p-3">{product.name}</td>
 <td className="border p-3">{product.price}</td>
 <td className="border p-3">{product.stock}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 );
}
export default Products;