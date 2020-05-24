import User from "../models/User";
import Drugstore from "../models/Drugstore";
import Truck from "../models/Truck";
import File from "../models/File";

import * as Yup from "yup";

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      phone: Yup.string(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(422).json({
        message: "Erro de validação. Verifique o body da requisição.",
      });
    }

    try {
      const { email, phone } = req.body;

      const userEmailExists = await User.findOne({ where: { email } });

      const userPhoneExists = await User.findOne({ where: { phone } });

      if (userEmailExists || userPhoneExists) {
        return res
          .status(422)
          .json({ message: "O usuário já está cadastrado." });
      }

      const user = await User.create(req.body);

      return res.json(user);
    } catch (err) {
      return res.status(500).json({ message: `${err}` });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (err) {
      return res.status(500).json({ message: `${err}` });
    }
  }

  async show(req, res) {
    try {
      const user = req.userId;
      console.log(user);

      const { name, email, phone } = await User.findOne({
        where: {
          id: user,
        },
      });

      if (!email) {
        return res.status(401).json({ message: "Usuário não encontrado." });
      }

      const drugstoreData = await Drugstore.findOne({
        where: {
          user_id: user,
        },
      });

      const truckData = await Truck.findOne({
        where: {
          user_id: user,
        },
      });
      const { status: drugStatus } = drugstoreData;
      const { status: truckStatus } = truckData;

      const { path } = await File.findOne({
        where: {
          user_id: user,
        },
      });

      return res.json({
        name,
        email,
        phone,
        drugstore: drugstoreData,
        truck: truckData,
        profile_url: path,
      });
    } catch (err) {
      return res.status(500).json({ message: `Erro no servidor. ${err}` });
    }
  }
}

export default new UserController();
