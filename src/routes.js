import { Router } from "express";
import cors from "cors";
import multer from "multer";
import multerConfig from "./config/multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import FileController from "./app/controllers/FilesController";
import DrugstoreController from "./app/controllers/DrugstoreController";
import DrugstoreFileController from "./app/controllers/DrugstoreFileController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();
const upload = multer(multerConfig);

routes.use(cors());

routes.get("/", (req, res) => {
  return res.json({ message: "Fala dev, estamos online!" });
});

routes.post("/sessions", SessionController.store);
routes.post("/users", UserController.store);

routes.use(authMiddleware);

routes.get("/users", UserController.index);

routes.get("/drugstore", DrugstoreController.index);
routes.post("/drugstore", DrugstoreController.store);
routes.post(
  "/drugstoreFiles",
  upload.array("file"),
  DrugstoreFileController.store
);

routes.post("/files", upload.single("file"), FileController.store);
routes.get("/files/:file", FileController.show);

export default routes;
