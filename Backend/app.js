const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);

mongoose
  .connect(
    "mongodb+srv://websitelearners:websitelearners@cluster0.65nue30.mongodb.net/auth?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
    console.log("Database Connected Successfully");
  })
  .catch((err) => console.log(err));
