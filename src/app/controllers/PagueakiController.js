import Pagueaki from "../models/PagueAki";

import * as Yup from "yup";

class PagueakiController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      phone: Yup.string().required(),
      email: Yup.string().email().required(),
      cpf: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(422).json({
        message: "Erro de validação. Verifique o body da requisição.",
      });
    }

    try {
      const { email } = req.body;

      const userEmailExists = await Pagueaki.findOne({ where: { email } });

      if (userEmailExists) {
        return res
          .status(422)
          .json({ message: "O usuário já contratou o serviço." });
      }

      const pagueaki = await Pagueaki.create(req.body);

      return res.json(pagueaki);
    } catch (err) {
      return res.status(500).json({ message: `${err}` });
    }
  }

  async show(req, res) {
    try {
      const { email } = req.query;

      const userData = await Pagueaki.findOne({
        where: {
          email,
        },
      });

      if (!userData) {
        return res.status(401).json({ message: "Contrato não encontrado." });
      }

      return res.json(userData);
    } catch (err) {
      return res.status(500).json({ message: `Erro no servidor. ${err}` });
    }
  }
}

export default new PagueakiController();
