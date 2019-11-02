const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extend: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gook");

app.listen(PORT, function (){
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});