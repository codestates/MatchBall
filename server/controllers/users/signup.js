const { users } = require('../../models')

module.exports = async (req, res) => {

    const { email, password, mobile, nickname, level, team } = req.body
    if (!email || !password || !mobile || !nickname || !level || !team) {
        return res.status(422).send({ message: "회원가입 실패" })
    }
    try {
        const userData1 = await users.findOne({ where: { email } })
        const userData2 = await users.findOne({ where: { mobile } })
        const userData3 = await users.findOne({ where: { nickname } })

        if (!userData1 && !userData2 && !userData3) {
            users.create({
                email,
                pw: password,
                mobile,
                nickname,
                level,
                team
            })

            res.status(200).json({ message: "ok" })
        } else {
            return res.status(409).json({ message: "email exists" })
        }
    } catch (err) {
        res.status(500).json({
            "code": 500,
            "error": "server error"
        })
    }
}