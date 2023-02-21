"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      userId: {
        allowNull: false, // NOT NULL
        autoIncrement: true, // AUTO_INCREMENT
        primaryKey: true, // Primary Key (기본키)
        type: Sequelize.INTEGER
      },
      nickname: {
        allowNull: false, // NOT NULL
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        allowNull: false, // NOT NULL
        type: Sequelize.STRING
      },
      likepost:{
        type: Sequelize.STRING // 5 15 10 //mysql에는 배열저장X
      },//배열을 저장가능 // sellect in << where 대신
      createdAt: {
        allowNull: false, // NOT NULL
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      },
      updatedAt: {
        allowNull: false, // NOT NULL
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};