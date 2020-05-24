import Sequelize, { Model } from "sequelize";

class Truck extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone1: Sequelize.STRING,
        phone2: Sequelize.STRING,
        birth_date: Sequelize.STRING,
        civil_state: Sequelize.STRING,
        genre: Sequelize.STRING,
        height: Sequelize.INTEGER,
        weight: Sequelize.INTEGER,
        professional_situation: Sequelize.STRING,
        income: Sequelize.STRING,
        city: Sequelize.STRING,
        uf: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
        address_number: Sequelize.NUMBER,
        cep: Sequelize.STRING,
        dependents: Sequelize.STRING,
        cpf: Sequelize.STRING,
        rg: Sequelize.STRING,
        via: Sequelize.STRING,
        renavan: Sequelize.STRING,
        truck_plate: Sequelize.STRING,
        truck_brand: Sequelize.STRING,
        truck_model: Sequelize.STRING,
        truck_color: Sequelize.STRING,
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

export default Truck;
