'use strict';
const User = require('../../class/User')
module.exports = {

  up: (queryInterface, Sequelize) => {
    // Factoy de User 
    const userAdm = new User()
    const userAlessandro = new User()
    userAlessandro.setName("Alessandro")
    userAlessandro.setEmail('asovitorio@gmail.com')
    userAlessandro.setPassword('321')
    console.log(userAdm.print())
    return queryInterface.bulkInsert('users', [
      userAdm.print(),
      userAlessandro.print()
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('users', null, {});

  }
};