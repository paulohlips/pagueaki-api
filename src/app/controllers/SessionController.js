import jwt from "jsonwebtoken";
import * as Yup from "yup";
import sequelize, { Op } from "sequelize";

import User from "../models/User";
import File from "../models/File";

import auth from "../../config/auth";

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      password: Yup.string().required(),
      email: Yup.string().email(),
      phone: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(422).json({
        message: "Erro de validação. Verifique o body da requisição.",
      });
    }

    const { phone, email, password } = req.body;

    try {
      const user = await User.findOne({
        where: {
          [Op.or]: {
            email: {
              [Op.like]: email,
            },
            phone: {
              [Op.like]: phone,
            },
          },
        },
        include: [
          {
            model: File,
            as: "avatar",
            attributes: ["id", "path"],
          },
        ],
      });

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
      }

      if (!(await user.checkPassword(password))) {
        return res
          .status(401)
          .json({ message: "A senha informada está incorreta." });
      }

      const { id, name, avatar } = user;

      return res.json({
        user: {
          id,
          name,
          phone,
          avatar,
        },
        token: jwt.sign({ id }, auth.secret, {
          expiresIn: auth.expiresIn,
        }),
      });
    } catch (err) {
      return res.status(500).json({ message: `${err}` });
    }
  }
}

export default new SessionController();
