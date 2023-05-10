const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  User.findAll()
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ error: err }));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  User.findOne({ where: { id: id } })
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({ error: err }));
});

router.post("/", (req, res) => {
  const { username, password, email, fav } = req.body;
  User.create({ username, password, email, fav })
    .then((newUser) => res.status(200).json(newUser))
    .catch((err) => res.status(404).json({ error: err }));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then((user) => user.destroy())
    .then(() => res.json({ message: "User deleted successfully" }))
    .catch((err) => res.status(404).json({ error: err }));
});

module.exports = router;
