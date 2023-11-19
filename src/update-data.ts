import { connectDB } from "./dbConnect.js";

export async function updateData() {
  const client = await connectDB();

  const updateQuery = 
  `UPDATE todo 
  SET title = $1
   WHERE id = $2 
   RETURNING *`;

   const values = ['something',1];

   const res  = client?.query(updateQuery,values);
   console.log(res);
}
