import mongoose from "mongoose";

export const connectMongo = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "netflix",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected to mongodb"))
    .catch((err) => console.log("not connected to mongodb", err));
};
