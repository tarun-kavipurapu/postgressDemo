import pg from "pg";

const { Client } = pg;  
export async function connectDB() {
try {
const client  = await new Client('postgres://mblmokcc:OBxCeq1PsXJn7wWvCyqI97j2JTSa15AJ@flora.db.elephantsql.com/mblmokcc');
await client.connect();
console.log("connected");
return client;
} catch (error) {
    console.log("connection error",error)
}
}