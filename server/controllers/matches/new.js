const { matches } = require('../../models')

module.exports = async (req, res) => {
    try {
        // console.log("______$$$$______$$$",req.body)
        const { message, region, region_Detail, sitename, user_id, is_matched, matchdate } = req.body;
        const test = req.body.message && req.body.region && req.body.region_Detail && req.body.sitename && req.body.user_id && req.body.is_matched && req.body.matchdate
        // console.log("message, region,region_Detail,sitename,user_id,is_matched,matchdate$$$$$$$",req.body.message, req.body.region,req.body.region_Detail,req.body.sitename,req.body.user_id,req.body.is_matched,req.body.matchdate)
        // console.log("$_$_$_$_$_$_$_$_",!test)    
        if (!test) {
            return res.status(422).send({ message: "새 매칭글 작성 실패" })
        }
        await matches.create({
            message,
            region,
            region_Detail,
            sitename,
            user_id,
            is_matched,
            matchdate,
        });
        res.json({ message: "ok" })
    } catch {
        res.send("실패!!!")
    }
}