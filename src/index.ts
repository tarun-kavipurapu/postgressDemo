import express from "express";
import { connectDB } from "./dbConnect.js";

const app = express();

connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  })
  .catch((err:string) => {
    console.log("DB connection error ", err);
  });
