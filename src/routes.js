import { Router } from "express";

import cors from "cors";

const routes = new Router();

routes.use(cors());

routes.get("/", (req, res) => {
  return res.json({ ok: true });
});

export default routes;
