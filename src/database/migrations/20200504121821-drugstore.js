module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("drugstores", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      public_place: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      /*       state: {
        type: Sequelize.STRING,
        allowNull: false,
      }, */
      neighborhood: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rg: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birth_date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      civil_state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      professional_situation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      public_agency: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      medicine: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      dependent: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      payment_method: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      payment_day: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bank_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bank_agency: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bank_account_number: {
        type: Sequelize.STRING,
        allowNull: true,
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

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("drugstores");
  },
};
