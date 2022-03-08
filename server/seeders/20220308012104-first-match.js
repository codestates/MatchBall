'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('matches', [
      {
        id: '1',
        message: '굿 게임',
        region: '서울',
        region_Detail: '강남구 대치동',
        sitename: "휘문고 운동장",
        user_id: "1",
        matchdate: "2022-03-22-15:00",
        is_matched: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        message: '굿 게임',
        region: '서울',
        region_Detail: '마포구',
        sitename: "양화대교 밑에 운동장",
        user_id: "2",
        matchdate: "2022-03-23-15:00",
        is_matched: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('matches', null, {});
  }
};
