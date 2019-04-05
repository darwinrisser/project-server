const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.mongodburi, {useNewUrlParser: true});

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const ProjectRoutes = require("./routes/ProjectRoutes");

app.use(ProjectRoutes);

app.listen(3001, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});
 