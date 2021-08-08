const express = require("express");
const bodyParser = require("body-parser");
const auth = require("./auth");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();

const db = require("./db");
const Users = db.users;

// for dev
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Db');
    initial();
});

// for prod
// db.sequelize.sync();

app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.post("/signin", auth.signin);

app.listen(3001, () => {
  console.log(`Server listening on ${3001}`);
});

function initial() {
  bcrypt.hash("password123", 10, (err, hash) => {
    Users.create({
      username: "practicemanager",
      role: "PRACTICEMANAGER",
      password: hash
    });
    Users.create({
      username: "clinician",
      role: "CLINICIAN",
      password: hash
    })
    Users.create({
      username: "receptionist",
      role: "RECEPTIONIST",
      password: hash
    })
  })

}