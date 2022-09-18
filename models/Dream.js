const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// create our Dream model
class Dream extends Model {}
// create fields/columns for Dream model
Dream.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dream_story: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    upvote: {
      type: DataTypes.INTEGER,
    },
    downvote: {
      type: DataTypes.INTEGER,
  },
},
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Dream",
  }
);
module.exports = Dream;