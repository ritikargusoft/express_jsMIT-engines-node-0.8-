import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1")

await client.connect();

const db = client.db('mongodb_nodejs_db');
const userCollection = db.collection("users");


//insert data
// userCollection.insertOne({name: "ritik negi", age : 21});

// userCollection.insertMany([
//     {name:"ritik", role:"student", age :22},
//     {name:"negi", role:"teacher", age :32},
//     {name:"akshaj", role:"tester", age :21},
// ])



//read
// const userCursor = userCollection.find()
// console.log(userCursor)

// for await(const user of userCursor){
//     console.log(user)
// }
//or
// const userCursor = await userCollection.find().toArray();
// console.log(userCursor)


//find data
// const user = await userCollection.findOne({name:"ritik"});
// console.log(user)
// console.log(user._id.toHexString())


// update 
// await userCollection.updateOne({name :"ritik"}, {$set:{age: 25}})

//delete
// await userCollection.deleteOne({name:"ritik"})
// await userCollection.deleteMany({name:"ritik"})