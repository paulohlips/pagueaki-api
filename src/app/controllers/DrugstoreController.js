import Drugstore from "../models/Drugstore";
import * as Yup from "yup";

class DrugstoreController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.string().required(),
      cep: Yup.string().required(),
      uf: Yup.string().required(),
      phone1: Yup.string().required(),
      phone2: Yup.string(),
      email: Yup.string().email().required(),
      cpf: Yup.string().required(),
      rg: Yup.string().required(),
      birth_date: Yup.string().required(),
      civil_state: Yup.string().required(),
      genre: Yup.string().required(),
      professional_situation: Yup.string().required(),
      height: Yup.number().required(),
      weight: Yup.number().required(),
      medicine: Yup.string(),
      dependent: Yup.string(),
      payment_method: Yup.string().required(),
      payment_day: Yup.number().required(),
      bank_information: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(422).json({
        message: "Erro de validação. Verifique o body da requisição.",
      });
    }

    try {
      const { email } = req.body;

      const userEmailExists = await Drugstore.findOne({ where: { email } });

      if (userEmailExists) {
        return res
          .status(422)
          .json({ message: "O usuário já possui um contrato ativo." });
      }
      const contract = await Drugstore.create(req.body);
      return res.json(contract);
    } catch (err) {
      return res.status(500).json({ message: `${err}` });
    }
  }

  async index(req, res) {
    try {
      const contracts = await Drugstore.findAll();

      return res.json(contracts);
    } catch (err) {
      return res.status(500).json({ message: `${err}` });
    }
  }
}

export default new DrugstoreController();
