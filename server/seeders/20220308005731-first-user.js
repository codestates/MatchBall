'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('users', [
      {
        id: '1',
        email: 'kimcoding1@test.com',
        pw: '1234',
        mobile: '000-0000-0000',
        nickname: 'kimcoding1',
        level: "입문자",
        team: "kt wiz",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        email: 'kimcoding2@test.com',
        pw: '1234',
        mobile: '000-1000-0000',
        nickname: 'kimcoding2',
        level: "초급자",
        team: "kt wiz",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3',
        email: 'kimcoding3@test.com',
        pw: '1234',
        mobile: '000-2000-0000',
        nickname: 'kimcoding3',
        level: "중급자",
        team: "kt wiz",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '4',
        email: 'kimcoding4@test.com',
        pw: '1234',
        mobile: '000-3000-0000',
        nickname: 'kimcoding4',
        level: "고급자",
        team: "kt wiz",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
