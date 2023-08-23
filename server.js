const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;
const MONGODB_URL = "mongodb+srv://admin:admin@nicconverter.abfmmtx.mongodb.net/nicConverter?retryWrites=true&w=majority";

app.use(express.json());

mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error("Error connecting to MongoDB", err));
  
app.use("/users", userRoutes);
