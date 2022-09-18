<<<<<<< HEAD
const { Model, DataTypes}=require('sequelize');
const sequelize = require('../config/connection');

//inherits peroperties from the Model class.
class Dream extends Model{};

//create columns for Dream model
Dream.init(
    {
        dream_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        dream_story:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [10]
            }
        },
        post_url:{
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                isURL: true,
            }
        },
        upvote:{
            type: DataTypes.INTEGER
        },
        downvote:{
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        freezeTableNames: true,
        underscored: true,
        modelName: 'dream'
    }
);

module.exports = Dream;
=======
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Dream model
class Dream extends Model {}

// create fields/columns for Dream model
Dream.init(
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
      Dream_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isURL: true
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'Dream'
    }
  );


  module.exports = Dream;
>>>>>>> c7147959f7352d3afbda1e4c295027715626ce69
