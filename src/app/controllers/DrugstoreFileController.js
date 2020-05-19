import path from "path";
import DrugstoreFile from "../models/DrugstoreFile";

class DrugstoreFileController {
  async store(req, res) {
    try {
      const filesArray = req.files;

      Object.values(filesArray).forEach((file) => {
        file.forEach(async (data) => {
          const fileName = data.originalname;
          const pathParam = data.filename;
          const name = data.fieldname;

          const stored = await DrugstoreFile.create({
            user_id: req.userId,
            name,
            file: fileName,
            path: pathParam,
          });
        });

        return res.json({
          message: `Upload de ${
            Object.keys(filesArray).length
          } arquivos finalizado.`,
        });
      });
    } catch (err) {
      return res.status(500).json({ message: `${err}` });
    }
  }

  async show(req, res) {
    try {
      const { file } = req.params;

      const filePath = path.resolve(
        __dirname,
        "..",
        "..",
        "..",
        "tmp",
        "uploads",
        file
      );

      return res.sendFile(filePath);
    } catch (err) {
      return res.status(500).json({ message: `${err}` });
    }
  }
}

export default new DrugstoreFileController();
