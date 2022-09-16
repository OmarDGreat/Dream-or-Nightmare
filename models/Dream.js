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