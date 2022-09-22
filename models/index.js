const Dream = require('./Dream');
const User = require('./User');

//create relationships between models.

User.hasMany(Dream,{
    foreignKey: 'user_id'
})

Dream.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});


module.exports = { User, Dream };

// User hasMany Dreams
// Dreams belong to User

// Dreams has many Upvotes/Dislikes
// Dreams belong to user
