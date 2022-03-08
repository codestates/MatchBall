const { matches } = require('../../models')

module.exports = (req, res) => {

  matches.findAll({})
    .then(data => res.json(data))
};