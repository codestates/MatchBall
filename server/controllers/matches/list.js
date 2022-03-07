const mysql = require('mysql')
// const app = express();
const connection = mysql.createConnection({
    host : 'matchball-database.cswrwl4zmldq.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password : 'matchballdatabase',
    database : 'test',
    port : '13306'
  });
  
  connection.connect();
  
  let testDummyData
  connection.query('SELECT * FROM matches',(error, rows ,fields) =>{
    if(error) throw error;
    console.log('Match info is!!',rows);
    testDummyData = rows;
  })
  connection.end();
  

module.exports = (req, res) => {
    res.json(testDummyData)
}