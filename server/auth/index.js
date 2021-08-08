const db = require("../db");
const config = require("./config");
const Users = db.users;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signin = (req, res) => {
  Users.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

        res.status(200).send({
            id: user.id,
            username: user.username,
            roles: user.role,
            accessToken: token
        });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};