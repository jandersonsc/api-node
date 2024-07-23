import { QueryInterface, DataTypes } from "sequelize";


module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
      },
      name: {
        type: DataTypes.STRING(160),
        allowNull: false,
      },
      birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      email: {
        allowNull: true,
        unique: true,
        type: DataTypes.STRING(120)
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      phoneNumber: {
        allowNull: true,
        type: DataTypes.STRING(20),
      },
      active: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('Users');
  }
};