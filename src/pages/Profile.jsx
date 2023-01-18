import React, { useState } from "react";

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "ayobami",
    email: "ayobami@gmail",
  });
  const { name, email } = formData;
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3 ">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />

            <input
              type="email"
              id="email"
              value={email}
              disable
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
               <p className="flex items-center ">Do you want to change your name ? <span className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer">Edit</span></p>
               <p className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 ml-1 cursor-pointer"> sign out</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
