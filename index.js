const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const RoleController = require('./controllers/roleController'); // Import RoleController

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = "mongodb+srv://kennie:869480Ak@cluster0.zkjbfkp.mongodb.net/?retryWrites=true&w=majority"

// Define predefined roles
const predefinedRoles = ['admin', 'facility manager', 'facility team', 'building user'];

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Create predefined roles on server startup
    await RoleController.createPredefinedRoles(predefinedRoles);
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(express.json());

app.use('/users', userRoutes);
app.use('/roles', roleRoutes);

// app.use(errorMiddleWare);