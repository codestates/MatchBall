const { matches } = require('../../models')
const { users } = require('../../models')


module.exports = async (req, res) => {
  try {
    // const currentUser = await getCurrentUser(req.user.id);
    let joinMatchesUsers = await matches.findAll({ //Word 테이블의 정보를 모두 가져온다.
      //attributes: ['id', 'word', 'status','createdAt'], //해당 컬럼의 데이터들만 가져온다.
      include: [ //데이터를 조인한다.
        {
          model: users,
          // attributes: ['id', 'name'] //users 데이터의 id와 name만 가져온다.
        },
        // {
        //   model: TodayWord,
        //   attributes: ['id', 'date']
        // },
      ],
      // where:{ //데이터의 값을 선별한다.
      //   status:{
      //         [Op.or]: [2, 3] //status가 2나 3인 데이터만 추출한다.
      //     }
      // }
    });
    // console.log("$$$$$$$join",joinMatchesUsers);
    res.json({ "matchesdata": joinMatchesUsers })
  } catch {
    res.send("fail!!")
  };
};