//components\EditProductForm.jsx
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LiaEdit } from "react-icons/lia";

import RemoveButton from "./RemoveButton";

const getProducts = async () => {
   try {
      const products = await fetch("http://localhost:3000/api/products", { cache: "no-store" });
      if (!products.ok) return notFound();
      return products.json();
   } catch (error) {
      console.log("Error loading products: ", error);
   }
};

export default async function ProductsList() {
   const data = await getProducts();

   return (
      <>
         <div className="">
            <table className="table">
               {/* head */}
               <thead>
                  <tr>
                     <th>Name/Country</th>
                     <th>Price</th>
                     <th>Category</th>
                     <th>Brand</th>
                  </tr>
               </thead>
               <tbody>
                  {data.map((product) => (
                     <tr key={product._id} className="border-b-1 border-orange-100">
                        <td>
                           <div className="flex items-center gap-3">
                              <div className="avatar shadow-lg rounded-full">
                                 <div className="mask mask-squircle w-12 h-12">
                                    <Image src={product.thumbnail} width={120} height={120} alt="Picture of the author" />
                                 </div>
                              </div>
                              <div>
                                 <div className="font-bold">{product.productName}</div>
                                 <div className="text-sm opacity-70 ">{product.description.slice(0, 50)}...</div>
                              </div>
                           </div>
                        </td>
                        <td>${product.price}</td>
                        <td>{product.category}</td>
                        <th>
                           <div className="flex justify-between center">
                              <button className="font-medium">{product.brand}</button>
                              {/* <LiaEdit className="w-4 h-4" /> */}
                              <div className="flex w-[24%] justify-between items-center">
                                 <Link href={`/editProduct/${product._id}`}>
                                    <button className="shadow-lg btn btn-sm btn-accent mx-5">Edit</button>
                                 </Link>
                                 <RemoveButton id={product._id} />
                              </div>
                           </div>
                        </th>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </>
   );
}
