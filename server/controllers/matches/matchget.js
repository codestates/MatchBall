const { matches } = require('../../models')
const { users } = require('../../models')
const { participants } = require('../../models')
module.exports = async (req, res) => {
    try {
        // console.log("&&&____&&&___&&&id",req.params.matchid);
        const orderuserid = req.body.id;
        const id = req.params.matchid;
        // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",req.params.matchid);
        const ismatched = await matches.findOne({ where: { id: id } });
        let ismatchedid = ismatched.dataValues.id;
        console.log("$$$$$$$$$$$$$$$$$ismatched.dataValues.is_matched", ismatchedid)
        if (ismatched.dataValues.is_matched === true) return res.status(406).send("이미 신청마감 되었습니다!");
        else {
            await matches.update({ is_matched: true }, { where: { id: id } }).then(data => console.log("매칭 신청 성공!")).catch(err => console.log(err));;
            //     await participants.create({
            //      match_id: ismatchedid,
            //      order_user_id: orderuserid,
            //  });
            res.json({ "message": "ok" });
        }
    } catch {
        res.status(400).send("matching req fail!!")
    };
}

