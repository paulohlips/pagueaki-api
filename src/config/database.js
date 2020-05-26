module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "cerrado2020",
  database: "pagueakidb",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    freezeTableName: true,
  },
};
