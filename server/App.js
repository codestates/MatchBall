require("dotenv").config();
const express = require("express");
const mysql = require('mysql');
const app = express();
const sequelize = require('./models').sequelize;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = 80;
sequelize.sync();

app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:4000","http://practice-bucket-deploy-ym.s3-website.ap-northeast-2.amazonaws.com","http://http://matchball-test.s3-website.ap-northeast-2.amazonaws.com"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"]
  })
  );
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const loginRouter = require("./routes/loginReg");
const matchRouter = require("./routes/matches");
const mypageRouter = require("./routes/mypage");


console.log("hello!");



// app.uns()

app.use('/users', loginRouter);
app.use('/matches', matchRouter);
app.use('/mypage', mypageRouter);



// app.use("/", (req, res) => {
//   res.status(200).send({ data: testDummyData });
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
