const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
const auth = require("./auth")

const app = express();

const db = require("./db");

// for dev
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Db');
    initial();
});

// for prod
// db.sequelize.sync();

app.post("/signin", auth.signin);

app.listen(3001, () => {
  console.log(`Server listening on ${3001}`);
});