const mysql = require('mysql')
// const app = express();
const connection = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_DATABASE,
    port : process.env.DATABASE_PORT
  });
  
  connection.connect();
  
  let testDummyData
  connection.query('SELECT * FROM matches',(error, rows ,fields) =>{
    if(error) throw error;
    // console.log('Match info is!!',rows);
    testDummyData = rows;
  })
  connection.end();
  

module.exports = (req, res) => {
    res.json(testDummyData)
}