"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddProduct = () => {
   const [productName, setProductName] = useState("");
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState(0);
   const [category, setCategory] = useState("");
   const [brand, setBrand] = useState("");
   const [country, setCountry] = useState("");
   const [thumbnail, setThumbnail] = useState("https://cdn.dummyjson.com/product-images/16/3.jpg");

   const router = useRouter();

   // Saving Data Into DataBase
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const res = await fetch(`http://localhost:3000/api/products`, {
            method: "POST",
            headers: {
               "Content-type": "application/json",
            },
            body: JSON.stringify({ productName, description, price, category, brand, country, thumbnail }),
         });

         if (!res.ok) {
            throw new Error("Failed to Add Product");
         }

         router.push("/");
         router.refresh();
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         <div className="container mx-auto mt-[6%] ">
            <form className="shadow-lg max-w-lg mx-auto p-6 bg-white rounded-lg border border-orange-200">
               <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product_name">
                     Product Name
                  </label>
                  <input
                     onChange={(e) => {
                        setProductName(e.target.value);
                     }}
                     className="focus:border focus:border-purple-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="productName"
                     type="text"
                     placeholder="Enter product name"
                  />
               </div>
               <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                     Category
                  </label>
                  <input
                     onChange={(e) => {
                        setCategory(e.target.value);
                     }}
                     className="focus:border focus:border-purple-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="category"
                     type="text"
                     placeholder="Enter category"
                  />
               </div>
               <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                     Country
                  </label>
                  <input
                     onChange={(e) => {
                        setCountry(e.target.value);
                     }}
                     className="focus:border focus:border-purple-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="country"
                     type="text"
                     placeholder="Enter country"
                  />
               </div>
               <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
                     Brand
                  </label>
                  <input
                     onChange={(e) => {
                        setBrand(e.target.value);
                     }}
                     className="focus:border focus:border-purple-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="brand"
                     type="text"
                     placeholder="Enter Brand"
                  />
               </div>
               <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                     Price $
                  </label>
                  <input
                     onChange={(e) => {
                        setPrice(e.target.value);
                     }}
                     className="focus:border focus:border-purple-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="price"
                     type="number"
                     placeholder="Enter price"
                  />
               </div>
               <div className="mb-4">
                  <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                     Image Link
                  </label>
                  <input
                     onChange={(e) => {
                        setThumbnail(e.target.value);
                     }}
                     type="text"
                     placeholder="Paste Link Here"
                     id="thumbnail"
                     name="thumbnail"
                     className="focus:border focus:border-purple-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
               </div>

               <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                     Description
                  </label>
                  <textarea onChange={(e) => setDescription(e.target.value)} className="w-full textarea textarea-bordered textarea-xs  max-w-xs" id="description" type="text" placeholder="Description"></textarea>
               </div>

               <div className="flex justify-center mt-12 mb-12 " onClick={handleSubmit}>
                  <div className="shadow-lg btn w-[30%] border border-orange-300 hover:bg-orange-300">Save</div>
               </div>
            </form>
         </div>
      </>
   );
};

export default AddProduct;
