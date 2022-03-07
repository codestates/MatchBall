require("dotenv").config();
const express = require("express");
const mysql = require('mysql');
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = 4000;


const loginRouter = require("./routes/loginReg");
const matchRouter = require("./routes/matches");
const mypageRouter = require("./routes/mypage");

// const connection = mysql.createConnection({
//   host : 'matchball-database.cswrwl4zmldq.ap-northeast-2.rds.amazonaws.com',
//   user: 'admin',
//   password : 'matchballdatabase',
//   database : 'test',
//   port : '13306'
// });

// connection.connect();

// let testDummyData
// connection.query('SELECT * FROM users',(error, rows ,fields) =>{
//   if(error) throw error;
//   console.log('User info is',rows);
//   testDummyData = rows;
// })
// connection.end();

console.log("hello!");

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



// app.use("/", (req, res) => {
//   res.status(200).send({ data: testDummyData });
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
