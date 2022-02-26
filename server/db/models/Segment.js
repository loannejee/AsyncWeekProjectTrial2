const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('segment', {
    decription: {
      type: Sequelize.TEXT,
    },

});