import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import env from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import otpRoutes from "./routes/otpRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
env.config();

try {
  await mongoose.connect(
    `mongodb+srv://ishu:${process.env.MONGODB_KEY}@cluster0.bbugwp2.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log("Connected to MongoDB");
} catch (err) {
  console.log(err);
}

app.use("/rabloApi/user", userRoutes);
app.use("/rabloApi/otp", otpRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

process.on("SIGINT", () => {
  closeConnection();
  process.exit();
});
