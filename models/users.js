'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // 모델간에 관계
      this.hasMany(models.posts, { // 2. Posts 모델에게 1:N 관계 설정을 합니다.
        sourceKey: 'userId', // 3. Users 모델의 userId 컬럼을
        foreignKey: 'userId', // 4. Posts 모델의 UserId 컬럼과 연결합니다.
      });
      this.hasMany(models.posts, { // 2. Posts 모델에게 1:N 관계 설정을 합니다.
        sourceKey: 'nickname', // 3. Users 모델의 userId 컬럼을
        foreignKey: 'nickname', // 4. Posts 모델의 UserId 컬럼과 연결합니다.
      });
      this.hasMany(models.comments, { // 2. Posts 모델에게 1:N 관계 설정을 합니다.
        sourceKey: 'userId', // 3. Users 모델의 userId 컬럼을
        foreignKey: 'userId', // 4. Posts 모델의 UserId 컬럼과 연결합니다.
      });
      this.hasMany(models.comments, { // 2. Posts 모델에게 1:N 관계 설정을 합니다.
        sourceKey: 'nickname', // 3. Users 모델의 userId 컬럼을
        foreignKey: 'nickname', // 4. Posts 모델의 UserId 컬럼과 연결합니다.
      });
      this.hasMany(models.likes, { // 2. Posts 모델에게 1:N 관계 설정을 합니다.
        sourceKey: 'userId', // 3. Users 모델의 userId 컬럼을
        foreignKey: 'userId', // 4. Posts 모델의 UserId 컬럼과 연결합니다.
      });

    }
  }
  users.init({
    userId: {
      allowNull: false, // NOT NULL
      autoIncrement: true, // AUTO_INCREMENT
      primaryKey: true, // Primary Key (기본키)
      type: DataTypes.INTEGER
    },
    nickname: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING
    },//배열을 저장가능 // sellect in << where 대신
    createdAt: {
      allowNull: false, // NOT NULL
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: false, // NOT NULL
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};