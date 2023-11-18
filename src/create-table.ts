import { connectDB } from "./dbConnect.js";

export async function createTable() {
  const client = await connectDB();
  const createTableQuery = `CREATE TABLE users(
id SERIAL PRIMARY KEY,
Email VARCHAR(255) UNIQUE NOT NULL,
Password VARCHAR(255) NOT NULL
);`;

  await client?.query(createTableQuery);

  const createTableQuery1 = `CREATE TABLE todo(
    id SERIAL PRIMARY KEY,
    title  TEXT NOT NULL,
    description TEXT ,
    user_id integer references users(id),
    done BOOLEAN default false
    );`;

  await client?.query(createTableQuery1);

  console.log("table created sucesffully");
}
