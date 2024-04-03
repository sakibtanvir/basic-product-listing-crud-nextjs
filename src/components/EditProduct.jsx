"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditProduct = ({ id, PN, Des, Pri, Cat, Brand, Country, Thumbnail }) => {
   const [productName, setProductName] = useState(PN);
   const [description, setDescription] = useState(Des);
   const [price, setPrice] = useState(Pri);
   const [category, setCategory] = useState(Cat);
   const [brand, setBrand] = useState(Brand);
   const [country, setCountry] = useState(Country);
   const [thumbnail, setThumbnail] = useState(Thumbnail);

   const router = useRouter();

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const res = await fetch(`http://localhost:3000/api/products/${id}`, {
            method: "PUT",
            headers: {
               "Content-type": "application/json",
            },
            body: JSON.stringify({ productName, description, price, category, brand, country, thumbnail }),
         });

         if (!res.ok) {
            throw new Error("Failed to update Product");
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
            <form className=" max-w-lg mx-auto p-6 bg-white rounded-lg border border-orange-200">
               <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product_name">
                     Product Name
                  </label>
                  <input
                     onChange={(e) => {
                        setProductName(e.target.value);
                     }}
                     className=" focus:border focus:border-purple-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     defaultValue={PN}
                     type="text"
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
                     value={category}
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
                     value={country}
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
                     value={brand}
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
                     value={price}
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
                     defaultValue={Thumbnail}
                     id="thumbnail"
                     name="thumbnail"
                     className="focus:border focus:border-purple-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
               </div>

               <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
                     Description
                  </label>
                  <input
                     onChange={(e) => {
                        setDescription(e.target.value);
                     }}
                     className="focus:border focus:border-purple-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="description"
                     defaultValue={Des}
                     type="text"
                  />
               </div>

               <div className="flex justify-center mt-12 mb-12 " onClick={handleSubmit}>
                  <div className="btn w-[30%] border border-orange-300 hover:bg-orange-300">Save</div>
               </div>
            </form>
         </div>
      </>
   );
};

export default EditProduct;
