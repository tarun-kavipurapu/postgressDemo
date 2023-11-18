import express from "express";
import { connectDB } from "./dbConnect.js";
import { createTable } from "./create-table.js";
import { insertData } from "./insert-data.js";
import { getData, getTodo, getallTodo } from "./get-data.js";  
import { updateData } from "./update-data.js";

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

  //creating table
  // createTable();
  // insertData();

  // getData();
  // getTodo(4);

  // getallTodo();

  // updateData();