const express = require("express");
const routes = require("../routes");
const app = express();
const PORT = 3001;
const db = require("../db");

app.use(express.json());

app.use("/", routes);

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
});
