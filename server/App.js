require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = 80;

const loginRouter = require("./routes/loginReg");
const matchRouter = require("./routes/matches");
const mypageRouter = require("./routes/mypage");

console.log("hello");

app.use(
  cors({
    // origin: ["http://localhost:3000"],
    // credentials: true,
    // methods: ["GET", "POST", "PATCH", "DELETE"]
  })
);

app.use(cookieParser());

app.use('/users', loginRouter);
app.use('/matches', matchRouter);
app.use('/mypage', mypageRouter);



app.use("/", (req, res) => {
  res.status(200).send({ data: "initial data" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
