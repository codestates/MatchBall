const { users, matches } = require('../../models')

module.exports = async (req, res) => {
    const amidala = await User.create({ username: 'p4dm3', points: 1000 });
    const queen = await Profile.create({ name: 'Queen' });
    await amidala.addProfile(queen, { through: { selfGranted: false } });

    const { user_id } = req.body
    users.findAll({
        include: [{
            model: matches,
            through: {
                where: { id: user_id }
            }
        }]
    })
        .then((data) => {
            res.json({ data: data })
        })

}