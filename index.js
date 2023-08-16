const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
require('./db').connectToMongoDB() // Connect to MongoDB
require('dotenv').config()
const errorMiddleWare=require("./middleware/errormiddleware.js")
const app = express();
const PORT = process.env.PORT || 3000;
  app.get("/",(req,res)=>{
res.send("welcome to cmms database")
  })
app.use(express.json());
app.use('/users', userRoutes);
app.use(errorMiddleWare);