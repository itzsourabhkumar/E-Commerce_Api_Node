'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Products',[
    {
      name: "Iphone 13",
      description: "The Brand new iphone 13 by apple",
      cost: 100000,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Ipad",
      description: "The Brand new ipad by apple",
      cost: 50000,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Mac Book Pro",
      description: "The Brand new Mac Book pro by apple",
      cost: 150000,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
