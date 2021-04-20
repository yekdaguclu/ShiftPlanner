const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "employees",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  db.query("INSERT INTO employees (name,password) VALUES (?,?)", [
    name,
    password,
  ]),
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("asdf");
      }
    };
});
app.get("/employee", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/", (req, res) => {
  res.send("dene");
});

app.listen(3001, () => {
  console.log("hello");
});


