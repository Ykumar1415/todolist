const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const env = require("dotenv").config();
const Routes = require("./routes/routes");
app.use(cors());
let uri = process.env.Uri; 
app.use(bodyParser.json());
app.use("/", Routes);
// uri = process.env.MONGO_URI;
mongoose
  .connect(uri)
  .then((result) => {
    app.listen(8000);
    console.log("Server is running on port 8000");
  })
  .catch((err) => {
    console.log(err);
  });
