import Sequelize, { Model } from "sequelize";

class Pagueaki extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone: Sequelize.STRING,
        cpf: Sequelize.STRING,
        status: Sequelize.STRING,
        associated: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Pagueaki;
