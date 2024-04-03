import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
   {
      productName: { type: String, required: true },
      description: { type: String, required: true },
      category: { type: String, required: true },
      country: { type: String, required: true },
      price: { type: Number, required: true },
      brand: { type: String, required: true },
      thumbnail: { type: String, required: true },
   },
   { timestamps: true }
);

export default mongoose.models.Products || mongoose.model("Products", productSchema);
