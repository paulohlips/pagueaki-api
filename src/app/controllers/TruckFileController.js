import path from "path";
import TruckFile from "../models/TruckFile";

class TruckFileController {
  async store(req, res) {
    try {
      const filesArray = req.files;
      //console.log(filesArray);
      Object.values(filesArray).forEach(async (file) => {
        //console.log(file);
        /* file.forEach(async (data) => { */
        const fileName = file.originalname;
        const pathParam = file.filename;
        const name = file.fieldname;

        const stored = await TruckFile.create({
          email: req.query.email,
          name,
          file: fileName,
          path: pathParam,
        });
        /* }); */

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

export default new TruckFileController();
