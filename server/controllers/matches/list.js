const { matches } = require('../../models')
const { users } = require('../../models')

module.exports = (req, res) => {
  matches.findAll({})
    .then(data => res.json(data))
};