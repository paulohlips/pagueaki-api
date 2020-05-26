import Sequelize, { Model } from "sequelize";

class Pagueaki extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Pagueaki;
