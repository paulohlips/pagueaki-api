module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("TruckFiles", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      /*       user_email: {
        type: Sequelize.INTEGER,
        references: { model: "users", key: "email" },
        onUpdate: "SET NULL",
        onDelete: "SET NULL",
        allowNull: false,
      }, */
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      file: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("TruckFiles");
  },
};
