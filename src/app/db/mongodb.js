import mongoose from "mongoose";

const connectdb = async () => {
   try {
      await mongoose.connect(process.env.MONGODB_URI);
   } catch (error) {
      throw new Error();
   }
};

export default connectdb;
