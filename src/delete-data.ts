import { connectDB } from "./dbConnect.js";

export async function deleteData() {
  const client = await connectDB();

  const deleteQuery = 
  `delete from todo where id = $1`;

   const values = [1];

   const res  = client?.query(deleteQuery,values);
   console.log(res);
}
