import Sequelize, { Model } from "sequelize";

class Drugstore extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        phone1: Sequelize.STRING,
        email: Sequelize.STRING,
        cpf: Sequelize.STRING,
        professional_situation: Sequelize.STRING,
        public_agency: Sequelize.STRING,
        payment_method: Sequelize.STRING,
        bank_name: Sequelize.STRING,
        bank_agency: Sequelize.STRING,
        bank_account_number: Sequelize.STRING,
        status: Sequelize.STRING,
        associated: Sequelize.BOOLEAN,
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
