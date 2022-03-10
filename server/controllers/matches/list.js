const { matches } = require('../../models')
const { users } = require('../../models')
let userData=[];

module.exports = (req, res) => {
// const params = 1
//  matches.query(`
//   SELECT m.id,m.message,m.region,m.region_Detail,m.sitename,m.user_id,m.matchdate,m.is_matched,u.id,u.email,u.mobile,u.nickname,u.level,u.team 
//   FROM matches as m 
//   LEFT JOIN users as u 
//   ON m.user_id = u.id 
//   `,params,(err,result)=> res.json(result))
 
  matches.findAll({})
    .then(data => 
      {
        return res.json(data)
      })
};