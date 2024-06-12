import express from "express";
import connection from "./db/index.js";

const app = express();
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
const PORT = process.env.PORT || 7000;

connection()
  .then(
    app.listen(PORT, () => {
      console.log("server is running on porty ", PORT);
    })
  )
  .catch((err) => console.log("connection failed", err));
