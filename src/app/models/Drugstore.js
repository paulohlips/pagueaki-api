import Sequelize, { Model } from "sequelize";

class Drugstore extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        cep: Sequelize.STRING,
        uf: Sequelize.STRING,
        phone1: Sequelize.STRING,
        phone2: Sequelize.STRING,
        email: Sequelize.STRING,
        cpf: Sequelize.STRING,
        rg: Sequelize.STRING,
        birth_date: Sequelize.STRING,
        civil_state: Sequelize.STRING,
        genre: Sequelize.STRING,
        professional_situation: Sequelize.STRING,
        height: Sequelize.INTEGER,
        weight: Sequelize.INTEGER,
        medicine: Sequelize.STRING,
        dependent: Sequelize.STRING,
        payment_method: Sequelize.STRING,
        payment_day: Sequelize.INTEGER,
        bank_information: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: "user_id", as: "user" });
  }
}

export default Drugstore;
