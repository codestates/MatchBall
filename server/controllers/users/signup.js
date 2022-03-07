const { users } = require('../../models')
const { generateAccessToken } = require('../tokenFunctions');

module.exports = (req, res) => {
    // email: DataTypes.STRING,
    // pw: DataTypes.STRING,
    // mobile: DataTypes.INTEGER,
    // nickname: DataTypes.STRING,
    // level: DataTypes.STRING,
    // team: DataTypes.STRING
    const { email, password, mobile, nickname, level, team } = req.body

    if (!email, password, mobile, nickname, level, team) {
        return res.status(422).send({ message: "회원가입 실패" })
    }

    users.findOrCreate({
        where: {
            email,
            pw: password,
            mobile,
            nickname,
            level,
            team
        }
    })
        .then(([result, created]) => {
            if (!created) {
                return res.status({ message: "email exists" })
            } else {
                delete result.dataValues.pw
                const accessToken = generateAccessToken(result.dataValues)

                res.cookie("accessToken", accessToken, {
                    httpOnly: true
                })

                res.status(200).json({ message: "ok" })
            }
        })

}