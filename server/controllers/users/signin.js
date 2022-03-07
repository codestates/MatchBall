const { users } = require('../../models')
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions')

module.exports = (req, res) => {
    const { email, password } = req.body

    users.findOne({
        where: {
            email,
            pw: password
        }
    })
        .then((data) => {
            if (!data) {
                return res.status(401).json({ message: "login fail" })
            }
            delete data.dataValues.pw

            const accessToken = generateAccessToken(data.dataValues)

            res.cookie("accessToken", accessToken, {
                httpOnly: true,
            })
            sendAccessToken(res, accessToken);
        })
        .catch((err) => {
            res.staus(500).send({
                "code": 500,
                "error": "server error"
            })
        })

}