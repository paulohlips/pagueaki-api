import path from "path";
import File from "../models/File";

class FileController {
  async store(req, res) {
    try {
      const { originalname: name, filename: pathParam } = req.file;
      const file = await File.create({
        name,
        path: pathParam,
      });
      return res.json({ file });
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

export default new FileController();
