import React from "react";
import EditProduct from "@/components/EditProduct";

const getProductById = async (id) => {
   try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
         cache: "no-store",
      });

      if (!res.ok) {
         throw new Error("Failed to fetch product");
      }

      return res.json();
   } catch (error) {
      console.log(error);
   }
};
const EditProductPage = async ({ params }) => {
   const { id } = params;
   const { product } = await getProductById(id);
   const { productName, country, brand, description, price, category, thumbnail } = product;
   return (
      <>
         <EditProduct id={id} PN={productName} Des={description} Pri={price} Cat={category} Brand={brand} Country={country} Thumbnail={thumbnail} />
      </>
   );
};

export default EditProductPage;
