const Dream = require('./Dream');
const User = require('./User');

//create relationships between models.
Dream.belongsTo(User);

User.hasMany(Dream,{
    foreignKey: 'dream_id'
})

module.exports = Dream;
