import { connectDB } from "./dbConnect.js";

export async function insertData() {
  const client = await connectDB();

  //here we are using ($1,$2) to avoid sql injection
  //if we were to directly insert email and password in the query string then it will cause sql injection since the user can insert any sql query in the input field
  const inserUserText = `INSERT INTO users (email, password) values ($1,$2) RETURNING id`;

  const values = ["johndoe123@gmail.com", "this_isa_hashed_password"];

 const res = await client?.query(inserUserText, values);

 const insertUserTodo = `INSERT INTO todo (title, description, user_id,done) values ($1,$2,$3,$4) RETURNING id`;

 const todovalues = ["gym", "go to gym", res?.rows[0].id,false];

    const todores = await client?.query(insertUserTodo, todovalues);
    
console.log('values inserted successfully');
}
