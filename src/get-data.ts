import { connectDB } from "./dbConnect.js";


export async function getData(){
    const client  = await connectDB();
    const selectQuery = `SELECT * FROM users `;

    const res = await client?.query(selectQuery);


    for(let row of res!.rows){
        console.log(`id: ${row.id} email: ${row.email} password: ${row.password}`);
    }
}

export async function getTodo(userId:number){ 
const client  = await connectDB();

const selectQuery = `SELECT * FROM todo where user_id = $1`;


const res = await client?.query(selectQuery,[userId]);


for(let row of res!.rows){
    console.log(`id: ${row.id} title: ${row.title} description: ${row.description} done: ${row.done}`);
}

}   

export async function getallTodo(){
    const client  = await connectDB();

const selectQuery = `SELECT * FROM todo `;



const res = await client?.query(selectQuery);

console.log(res?.rows);
}