const { matches } = require('../../models')
const { users } = require('../../models')
module.exports = async(req, res) => {
    try{
        const {id} = req.body;
        // const currentUser = await getCurrentUser(req.user.id);
           let joinMatchUser = await matches.findOne({ //Word 테이블의 정보를 모두 가져온다.
             //attributes: ['id', 'word', 'status','createdAt'], //해당 컬럼의 데이터들만 가져온다.
             include:[ //데이터를 조인한다.
               {
                 model: users, 
                 // attributes: ['id', 'name'] //users 데이터의 id와 name만 가져온다.
               },
               // {
               //   model: TodayWord,
               //   attributes: ['id', 'date']
               // },
             ],
             where:{ //데이터의 값을 선별한다.
               id: id
             }
           });
           // console.log("$$$$$$$join",joinMatchesUsers);
         res.json({"matchdata" : joinMatchUser})
    }catch{
        res.send("매칭 신청 실패")
    }   
}
