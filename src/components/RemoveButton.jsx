"use client";
import React from "react";
import { GiCrossedBones } from "react-icons/gi";
import { useRouter } from "next/navigation";

const RemoveButton = ({ id }) => {
   const router = useRouter();
   const removeProduct = async () => {
      const confirmed = confirm("Are you sure?");

      if (confirmed) {
         const res = await fetch(`http://localhost:3000/api/products?id=${id}`, {
            method: "DELETE",
         });

         if (res.ok) {
            router.refresh();
         }
      }
   };
   return (
      <div onClick={removeProduct}>
         <GiCrossedBones className="shadow-lg w-5 h-5 hover:bg-orange-300 rounded-2xl" />
      </div>
   );
};

export default RemoveButton;
