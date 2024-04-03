import ProductsSchema from "@/app/db/models/ProductsSchema";
import connectdb from "@/app/db/mongodb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
   try {
      await connectdb();
      const products = await ProductsSchema.find();
      return new NextResponse(JSON.stringify(products), { status: 200 });
   } catch (error) {
      return new NextResponse("Error: ", error, { status: 500 });
   }
};

export const POST = async (request) => {
   try {
      const { productName, description, price, category, brand, country, thumbnail } = await request.json();

      await connectdb();
      await ProductsSchema.create({ productName, description, price, category, brand, country, thumbnail });
      return new NextResponse({ message: "Product Created" }, { status: 200 });
   } catch (error) {
      return new NextResponse("Error: ", error, { status: 500 });
   }
};

export async function DELETE(request) {
   try {
      const id = request.nextUrl.searchParams.get("id");
      await connectdb();
      await ProductsSchema.findByIdAndDelete(id);
      return NextResponse.json({ message: "Product deleted" }, { status: 200 });
   } catch (error) {
      return new NextResponse("Error: ", error, { status: 500 });
   }
}
