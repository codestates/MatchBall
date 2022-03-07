const { users } = require('../../models')
const { isAuthorized } = require('../tokenFunctions');

module.exports = (req, res) => {
    const accessToken = isAuthorized(req)

    if (!accessToken) {
        return res.status(422).json({ message: "not authorized" })
    }

    const { email } = accessToken
    users.findOne({
        where: {
            email
        }
    })
        .then((data) => {
            delete data.dataValues.pw
            return res.json({ data: { userInfo: data.dataValues }, message: "ok" })
        })
        .catch((err) => {
            res.status(500).json({
                code: 500,
                error: "server error"
            })
        })
}