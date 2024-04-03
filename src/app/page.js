import AddButton from "@/components/AddButton";
import ProductsList from "@/components/ProductsList";
import Image from "next/image";

export default function Home() {
   return (
      <>
         <AddButton name="+ Add Button" />
         <ProductsList />
      </>
   );
}
