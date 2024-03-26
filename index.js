const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  res.send("Hello Form Node API Server");
});

mongoose.connect("mongodb+srv://attiazero:jVLs5Zd7u7w6HBan@backenddb.rpqlaqi.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB").then(() => {
  console.log("Connected to database");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
})
.catch(() => {
  console.log("Connection Failed!");
});
