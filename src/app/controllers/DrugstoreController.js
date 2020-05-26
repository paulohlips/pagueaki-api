import Drugstore from "../models/Drugstore";
import * as Yup from "yup";

class DrugstoreController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      last_name: Yup.string().required(),
      phone1: Yup.string().required(),
      email: Yup.string().email().required(),
      cpf: Yup.string().required(),
      professional_situation: Yup.string().required(),
      public_agency: Yup.string().nullable(),
      payment_method: Yup.string().required(),
      bank_name: Yup.string().nullable(),
      bank_agency: Yup.string().nullable(),
      bank_account_number: Yup.string().nullable(),
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

      const userEmailExists = await Drugstore.findOne({ where: { email } });

      if (userEmailExists) {
        return res
          .status(422)
          .json({ message: "O usuário já possui um contrato ativo." });
      }
      const contract = await Drugstore.create(body);
      return res.json(contract);
    } catch (err) {
      return res.status(500).json({ message: `${err}` });
    }
  }

  async index(req, res) {
    try {
      const contracts = await Drugstore.findOne({
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

export default new DrugstoreController();
