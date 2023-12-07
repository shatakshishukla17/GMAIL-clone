import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = ()=>{
    const DB_URI=`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ac-ifsimd7-shard-00-00.ipbili7.mongodb.net:27017,ac-ifsimd7-shard-00-01.ipbili7.mongodb.net:27017,ac-ifsimd7-shard-00-02.ipbili7.mongodb.net:27017/?ssl=true&replicaSet=atlas-trphzb-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        mongoose.connect(DB_URI);
        console.log('database connected successfully');
    } catch(error){
        console.log('Error while connecting with databse ', error.message);
    }
}


export default Connection;