import Sequelize, { Model } from "sequelize";

class Drugstore extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        city: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
        address_number: Sequelize.NUMBER,
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
        public_agency: Sequelize.STRING,
        height: Sequelize.INTEGER,
        weight: Sequelize.INTEGER,
        medicine: Sequelize.STRING,
        dependent: Sequelize.STRING,
        payment_method: Sequelize.STRING,
        payment_day: Sequelize.INTEGER,
        bank_name: Sequelize.STRING,
        bank_agency: Sequelize.STRING,
        bank_account_number: Sequelize.STRING,
        bank_account_number: Sequelize.STRING,
        status: Sequelize.STRING,
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
