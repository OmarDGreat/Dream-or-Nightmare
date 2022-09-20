var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');
	
// create a sequelize instance with our local postgres database information.
const sequelize = new Sequelize('form', 'root', '', {
	host:'localhost',
	port: 3306,
	dialect:'mysql',
	pool:{
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}, 
	operatorsAliases: false
});

// setup User model and its fields.
var UserSchema = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
	username: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}); 

UserSchema.beforeCreate((user, options) => {
	const salt = bcrypt.genSaltSync(); //genSaltSync(It generates random bits of numbers and characters)
	user.password = bcrypt.hashSync(user.password, salt); //hashSync(Joins the random bits generated earlier
    // on with our passowrd to make it encrypted and more secured)
});
  

UserSchema.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password); //compareSync(Compares the password the user entetered
        //while loggin in to see if its a match with the password in our database)
      }; 

// create all the defined tables in the specified database.
sequelize.sync()
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

// export User model for use in other files.
module.exports = UserSchema;
