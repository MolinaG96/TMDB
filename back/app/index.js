const express = require("express");
const routes = require("../routes");
const app = express();
const PORT = 3001;
const db = require("../db");
const cors = require("cors");

app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

app.use("/", routes);

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
});
