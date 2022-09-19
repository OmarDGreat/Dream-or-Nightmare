const Dream = require('./Dream');
const User = require('./User');

//create relationships between models.
Dream.belongsTo(User,{
    foreignKey: 'user_id'
});

User.hasMany(Dream,{
    foreignKey: 'dream_id'
})

module.exports = Dream;
