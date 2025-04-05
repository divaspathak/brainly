import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'; 
import rootRouter from './routes';

const app = express(); 
app.use(express.json()); 

app.use("/api/v1", rootRouter); 
async function main(){
    await mongoose.connect("mongodb+srv://divaspathak:Divas5563**@cluster0.2n3lmsk.mongodb.net/NeuraNote");
    app.listen(3000, () =>{
       console.log("The Server is listening at port No. 3000");
    }) 
}
main(); 

