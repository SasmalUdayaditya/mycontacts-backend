const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();
const app = express();
const port = process.env.PORT || 4500;

//Using Middlewares
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);
//app port number
app.listen(port, () => {
  console.log("Expres app is listening on port: " + port);
});

///Resourse: https://www.youtube.com/watch?v=H9M02of22z4
