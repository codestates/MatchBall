'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('participants', [
      {
        id: "1",
        order_user_id: "3",
        match_id: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('participants', null, {});
  }
};
