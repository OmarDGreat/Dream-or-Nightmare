<<<<<<< HEAD
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
=======
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
>>>>>>> 40b154cfa65d48efe20b59ea5cbba59d37b94e80

// create our Dream model
class Dream extends Model {}

// create fields/columns for Dream model
Dream.init(
<<<<<<< HEAD
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dream_story:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len: [10]
        }
    },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
=======
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
>>>>>>> 40b154cfa65d48efe20b59ea5cbba59d37b94e80
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

<<<<<<< HEAD

  module.exports = Dream;
=======
module.exports = Dream;
>>>>>>> 40b154cfa65d48efe20b59ea5cbba59d37b94e80
