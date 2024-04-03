import { NextResponse } from "next/server";
import ProductsSchema from "@/app/db/models/ProductsSchema";
import connectdb from "@/app/db/mongodb";

export async function PUT(request, { params }) {
   try {
      const { id } = params;
      const { productName, description, price, category, brand, country, thumbnail } = await request.json();
      await connectdb();
      await ProductsSchema.findByIdAndUpdate(id, { productName, description, price, category, brand, country, thumbnail });
      return NextResponse.json({ message: "Product updated" }, { status: 200 });
   } catch (error) {
      return new NextResponse("Error: ", error, { status: 500 });
   }
}

export async function GET(request, { params }) {
   try {
      const { id } = params;
      await connectdb();
      const product = await ProductsSchema.findOne({ _id: id });
      return NextResponse.json({ product }, { status: 200 });
   } catch (error) {
      return new NextResponse("Error: ", error, { status: 500 });
   }
}
