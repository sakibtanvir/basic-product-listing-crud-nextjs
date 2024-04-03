import Link from "next/link";
import React from "react";

const AddButton = (props) => {
   return (
      <Link href={"/addproduct"} className="flex justify-center mt-3 mb-12 ">
         <button className=" shadow-lg btn w-[30%] border border-orange-300">{props.name}</button>
      </Link>
   );
};

export default AddButton;
