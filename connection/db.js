import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const db=()=>{
const DB_USERNAME=process.env.DB_USER;
const DB_PASSWORD=process.env.DB_PASS
const DB_URL=`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.kuzuv7i.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(DB_URL,{useNewUrlParser:true})
mongoose.connection.on('connected',()=>{
    console.log('dataBase connected')
})
mongoose.connection.on('disconnected',()=>{
    console.log('dataBase disconnected')
})
mongoose.connection.on('error',()=>{
    console.log('error in dataBase connection',error.message)
})

}
export default db