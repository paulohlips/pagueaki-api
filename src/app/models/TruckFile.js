import Sequelize, { Model } from "sequelize";

class TruckFiles extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        name: Sequelize.STRING,
        file: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3333/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  /*   static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_email", as: "user" });
  } */
}

export default TruckFiles;
