const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const errorMiddleWare=require("./middleware/errormiddleware")
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI ="mongodb+srv://kennie:869480Ak@cluster0.zkjbfkp.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
app.use(express.json());
app.use('/users', userRoutes);
app.use('/roles', roleRoutes);
app.use(errorMiddleWare)
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});