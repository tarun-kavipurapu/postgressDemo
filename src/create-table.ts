import { connectDB } from "./dbConnect";

export async  function createTable() {
const client = await connectDB();
const createTableQuery = `CREATE TABLE users(
id SERIAL PRIMARY KEY,
Email VARCHAR(255) UNIQUE NOT NULL,
Password VARCHAR(255) NOT NULL,
);`

await client.query(createTableQuery);


}