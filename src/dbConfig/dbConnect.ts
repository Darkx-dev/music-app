import mongoose from "mongoose";

export const connect = async () => {
  try {
    // await mongoose.connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB}`)
    await mongoose.connect(
      `mongodb+srv://darkxdev23:${process.env.MONGO_PASSWORD}@cluster0.tvrlqak.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=Cluster0`
    );
    const connection = mongoose.connection;
    connection.once("open", () => {
      console.log("MongoDB database connection established successfully");
    });
    connection.on("error", (err) => {
      console.log(`MongoDB connection error: ${err.message}`);
      process.exit(err.code);
    });
  } catch (err) {
    console.log("Something went wrong");
    console.log(err);
  }
};
