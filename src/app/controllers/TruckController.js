import Truck from "../models/Truck";
import * as Yup from "yup";

class TruckController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      last_name: Yup.string().required(),
      email: Yup.string().email().required(),
      phone1: Yup.string().required(),
      phone2: Yup.string().nullable(),
      birth_date: Yup.string().required(),
      civil_state: Yup.string().required(),
      genre: Yup.string().required(),
      height: Yup.string().required(),
      weight: Yup.string().required(),
      professional_situation: Yup.string().required(),
      income: Yup.string().required(),
      city: Yup.string().required(),
      uf: Yup.string().required(),
      neighborhood: Yup.string().required(),
      address_number: Yup.string().required(),
      cep: Yup.string().required(),
      dependents: Yup.string().nullable(),
      cpf: Yup.string().required(),
      rg: Yup.string().required(),
      via: Yup.string().required(),
      renavan: Yup.string().required(),
      truck_plate: Yup.string().required(),
      truck_brand: Yup.string().required(),
      truck_model: Yup.string().required(),
      truck_color: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(422).json({
        message: "Erro de validação. Verifique o body da requisição.",
      });
    }

    try {
      let body = req.body;
      const { email } = body;

      body = { ...body, user_id: req.userId };

      const userEmailExists = await Truck.findOne({ where: { email } });

      if (userEmailExists) {
        return res
          .status(422)
          .json({ message: "O usuário já possui um contrato ativo." });
      }
      const contract = await Truck.create(body);
      return res.json(contract);
    } catch (err) {
      return res.status(500).json({ message: `${err}` });
    }
  }

  async index(req, res) {
    try {
      const contracts = await Truck.findOne({
        where: {
          user_id: req.params.user,
        },
      });

      return res.json(contracts);
    } catch (err) {
      return res.status(500).json({ message: `${err}` });
    }
  }
}

export default new TruckController();
