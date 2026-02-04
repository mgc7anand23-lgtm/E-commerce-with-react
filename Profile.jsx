import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
 const { adminName } = useParams();
 return (
 <div className="text-center p-10">
 <h1 className="text-3xl font-bold text-blue-600">Admin Profile</h1>
 <p className="mt-4 text-lg text-gray-600">Welcome, <span className="font-bold text-blue-500">{adminName}</span>! Here you can update your profile settings.
</p>
 </div>
);
}
export default Profile;