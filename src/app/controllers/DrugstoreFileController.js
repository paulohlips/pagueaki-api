import path from "path";
import DrugstoreFile from "../models/DrugstoreFile";

class DrugstoreFileController {
  async store(req, res) {
    try {
      const filesArray = req.files;

      filesArray.forEach(async (file) => {
        const name = file.originalname;
        const pathParam = file.filename;

        const stored = await DrugstoreFile.create({
          user_id: req.userId,
          name,
          path: pathParam,
        });

        return res.json({
          message: `Upload de ${filesArray.length} arquivos finalizado.`,
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
