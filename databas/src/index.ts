import express from "express";
import mongoose from 'mongoose';
import router from "./routes";
import cors from "cors";


const app =express();

app.use(cors());

app.use(express.json());
const MONGO_URL ="mongodb://127.0.0.1:27017";
mongoose.connect(MONGO_URL, {
    dbName: "node-typescript-app",
})  
    .then(()=> {
       console.log("Database connected");

    })
    .catch((error: any)=> console.log(error));
app.use("/", router);

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');

});

