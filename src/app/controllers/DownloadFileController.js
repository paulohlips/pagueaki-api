import path from "path";

class DownloadFileController {
  async show(req, res) {
    const { file } = req.params;
    try {
      res.sendFile(path.resolve("src", "static", `${file}.pdf`));
    } catch (err) {
      return res.json({ message: `Erro no servidor.${err}` });
    }
  }
}

export default new DownloadFileController();
