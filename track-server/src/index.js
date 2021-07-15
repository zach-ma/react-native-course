require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const requireAuth = require("./middlewares/requireAuth");

// app object, represents the entire application
const app = express();

// json info should be parsed first
app.use(bodyParser.json());

// associates all the request handlers with the main express application
app.use(authRoutes);

app.use(trackRoutes);

// mongodb+srv://admin:<password>@cluster0.scnz1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const mongoUri =
  "mongodb+srv://admin:passwordpassword@cluster0.scnz1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// connect
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
// detect errors when connecting
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

// route handlers
app.get("/", requireAuth, (req, res) => {
  res.send(`Your eamil: ${req.user.email}`);
});

// listen to certain port in local machine
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
