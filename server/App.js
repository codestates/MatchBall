require("dotenv").config();
const express = require("express");
const mysql = require('mysql');
const app = express();
const cors = require("cors");
const PORT = 80;

const connection = mysql.createConnection({
  host : 'matchball-database.cswrwl4zmldq.ap-northeast-2.rds.amazonaws.com',
  user: 'admin',
  password : 'matchballdatabase',
  database : 'test',
  port : '13306'
});

connection.connect();

connection.query('SELECT * FROM users',(error, rows ,fields) =>{
  if(error) throw error;
  console.log('User info is',rows);
})
connection.end();


console.log("hello");

app.use(cors());

app.use("/", (req, res) => {
  res.status(200).send({ data: "initial data" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
