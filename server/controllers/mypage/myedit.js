const { users } = require('../../models')

module.exports = async (req, res) => {

    const { user_id, password, mobile, nickname, level, team } = req.body

    if (!user_id || !password || !mobile || !nickname || !level || !team) {
        res.status(404).json({ message: "invalid input" })
    }
    try {
        const userData1 = await users.findOne({ where: { mobile } })
        const userData2 = await users.findOne({ where: { nickname } })

        if (!!userData1 && !!userData2) {
            res.status(406).json({ message: "이미 사용중인 전화번호와 닉네임 입니다." })
        } else if (!!userData1) {
            res.status(406).json({ message: "이미 사용중인 전화번호 입니다." })
        } else if (!!userData2) {
            res.status(406).json({ message: "이미 사용중인 닉네임 입니다." })
        } else {
            users.update(
                {
                    pw: password,
                    mobile,
                    nickname,
                    level,
                    team
                },
                { where: { id: user_id } }
            ).then((data) => {
                res.status(200).json({ message: "ok" })
            })
        }
    } catch (err) {
        res.status(500).json({
            "code": 500,
            "error": "server error"
        })
    }
}