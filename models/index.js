const Dream = require('./Dream');
const User = require('./User');

//create relationships between models.
Dream.belongsTo(User);

User.hasMany(Dream,{
    foreignKey: 'user_id'
})




module.exports = Dream;

// User hasMany Dreams
// Dreams belong to User

// Dreams has many Upvotes/Dislikes
// Dreams belong to user
