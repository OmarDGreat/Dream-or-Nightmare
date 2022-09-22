const seedUsers = require('./user-seeds');
const seedDreams = require('./dream-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedDreams();
  console.log('--------------');

  process.exit(0);
};

seedAll();
