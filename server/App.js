require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 80;

console.log("hello");

app.use(cors());

app.use("/", (req, res) => {
  res.status(200).send({ data: "initial data" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
