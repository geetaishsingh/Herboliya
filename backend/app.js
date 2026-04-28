import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoutes.js";
import userRoute from "./routes/userRoutes.js";
import itemRoute from "./routes/itemRoutes.js";
import orderRoute from "./routes/order.routes.js";
dotenv.config();
const app = express();
let port = process.env.PORT || 5000;
app.use(cookieParser());

app.use(express.json());
const allowedOrigins = [
  "http://localhost:5173",
  "https://herboliya.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
    credentials: true,
  }),
);

// 🔥 important
app.options("*", cors());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/item", itemRoute);
app.use("/api/order", orderRoute);
connectDB()
  .then((res) => {
    app.listen(port, () => {
      console.log("server is listening");
    });
    console.log("data base is connected");
  })
  .catch((err) => {
    console.log(err);
  });
