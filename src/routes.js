import { Router } from "express";
import cors from "cors";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.use(cors());

routes.get("/", (req, res) => {
  return res.json({ message: "Fala dev, estamos online!" });
});

routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

export default routes;
