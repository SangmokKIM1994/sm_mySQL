'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.users, { // 2. Users 모델에게 N:1 관계 설정을 합니다.
        targetKey: 'userId', // 3. Users 모델의 userId 컬럼을
        foreignKey: 'userId', // 4. Posts 모델의 UserId 컬럼과 연결합니다.
      });
      this.belongsTo(models.users, { // 2. Users 모델에게 N:1 관계 설정을 합니다.
        targetKey: 'nickname', // 3. Users 모델의 userId 컬럼을
        foreignKey: 'nickname', // 4. Posts 모델의 UserId 컬럼과 연결합니다.
      });

      this.hasMany(models.comments, { // 2. Posts 모델에게 1:N 관계 설정을 합니다.
        sourceKey: 'postId', // 3. Users 모델의 userId 컬럼을
        foreignKey: 'postId', // 4. Posts 모델의 UserId 컬럼과 연결합니다.
      });
      this.hasMany(models.likes, { // 2. Posts 모델에게 1:N 관계 설정을 합니다.
        sourceKey: 'postId', // 3. Users 모델의 userId 컬럼을
        foreignKey: 'postId', // 4. Posts 모델의 UserId 컬럼과 연결합니다.
      });
    }
  }
  posts.init({
    postId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false, // NOT NULL
      type: DataTypes.INTEGER,
      references: {
        model: 'users', // Users 모델을 참조합니다.
        key: 'userId', // Users 모델의 userId를 참조합니다.
      },
      onDelete: 'CASCADE', // 만약 Users 모델의 userId가 삭제되면, UserInfos 모델의 데이터가 삭제됩니다.
    },
    nickname: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING,
      references: {
        model: 'users', // Users 모델을 참조합니다.
        key: 'nickname', // Users 모델의 userId를 참조합니다.
      },
      onDelete: 'CASCADE', // 만약 Users 모델의 userId가 삭제되면, UserInfos 모델의 데이터가 삭제됩니다.
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    likecount: {
      type: DataTypes.INTEGER// 1 >> 2 3 4 5 
    },
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
    modelName: 'posts',
  });
  return posts;
};