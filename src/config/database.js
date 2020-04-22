module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "pagueakidb",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
