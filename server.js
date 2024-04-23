require('dotenv').config();
const Connection = require('./config/connection');
const notesRoute=require('./routes/notes');
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/notes',notesRoute);
app.listen(process.env.PORT,()=>{
    Connection.connection();
    console.log(`server is running on port:${process.env.PORT}`)
})