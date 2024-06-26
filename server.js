const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 4500;
//Methods
app.use("/api/contacts", require("./routes/contactRoutes"));

//app port number
app.listen(port, () => {
  console.log("Expres app is listening on port: " + port);
});

///Resourse: https://www.youtube.com/watch?v=H9M02of22z4
