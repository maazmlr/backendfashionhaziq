import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// routes

import productRoutes from "./routes/product.routes.js";
import ordeRoutes from "./routes/order.routes.js";

// routes declerationOrd

app.use("/api/v1/order", ordeRoutes);
app.use("/api/v1/product", productRoutes);
app.get("/routes", (req, res) => {
  return res.send("hello world");
});
export { app };
