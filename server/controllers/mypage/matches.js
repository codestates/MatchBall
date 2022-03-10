const { users, matches } = require('../../models')

module.exports = (req, res) => {

    const { user_id } = req.body

    matches.findAll({
        where: {
            user_id
        },
        include: {
            model: users,
            attributes: ['id', 'email', 'mobile', 'nickname', 'level', 'team', 'createdAt', 'updatedAt']
        }

    })
        .then((data) => {

            res.json({ data: data, message: "ok" })
        })
        .catch(err => {
            res.status(500).json({
                "code": 500,
                "error": "server error"
            })
        })
}