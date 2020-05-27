import { Router } from "express";
import cors from "cors";
import multer from "multer";
import multerConfig from "./config/multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import FileController from "./app/controllers/FilesController";
import DrugstoreController from "./app/controllers/DrugstoreController";
import DownloadFileController from "./app/controllers/DownloadFileController";
import TruckController from "./app/controllers/TruckController";
import TruckFileController from "./app/controllers/TruckFileController";
import PagueakiController from "./app/controllers/PagueakiController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();
const upload = multer(multerConfig);

routes.use(cors());

routes.get("/", (req, res) => {
  return res.json({ message: "Fala dev, estamos online!" });
});

routes.post("/sessions", SessionController.store);
routes.post("/users", UserController.store);

routes.get("/download/:file", DownloadFileController.show);

//routes.use(authMiddleware);

routes.get("/users", UserController.show);

routes.get("/drugstore/:user", DrugstoreController.index);
routes.post("/drugstore", DrugstoreController.store);

routes.get("/pagueaki", PagueakiController.show);
routes.post("/pagueaki", PagueakiController.store);

routes.get("/trucks/:user", TruckController.index);
routes.post("/trucks", TruckController.store);
routes.post(
  "/truckFiles",
  upload.any([
    { name: "doc_caminhao_frente", maxCount: 1 },
    { name: "doc_caminhao_tras", maxCount: 1 },
    { name: "foto_assinatura", maxCount: 1 },
    { name: "foto_rosto", maxCount: 1 },
    { name: "foto_cnh", maxCount: 1 },
  ]),
  TruckFileController.store
);

routes.get("/userContracts", UserController.show);

routes.post("/files", upload.single("file"), FileController.store);
routes.get("/files/:file", FileController.show);

export default routes;
