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
  const Idnumber = req.body.Idnumber;
  const Name = req.body.Name;
  const Surname = req.body.Surname;
  const Password = req.body.Password;
  const DateofBirth = req.body.DateofBirth;
  const Position = req.body.Position;
  const Mail = req.body.Mail;
  const Department = req.body.Department;

  db.query("INSERT INTO employees (Idnumber,Name,Surname,Password,DateofBirth,Position,Mail,Department) VALUES (?,?,?,?,?,?,?,?)", [
    Idnumber,
    Name,
    Surname,
    Password,
    DateofBirth,
    Position,
    Mail,
    Department,
  ]),
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("asdf");
      }
    };
});

app.put("/update", (req, res) => {
  
  const Name = req.body.Name;
  const Surname = req.body.Surname;
  const Password = req.body.Password;
  const DateofBirth = req.body.DateofBirth;
  const Position = req.body.Position;
  const Mail = req.body.Mail;
  const Department = req.body.Department;
  const Idnumber = req.body.Idnumber;
  db.query("UPDATE SET employees Name=?,Surname=?,Password=?,DateofBirth=?,Position=?,Mail=?,Department=? WHERE Idnumber=?", [
    Name,
    Surname,
    Password,
    DateofBirth,
    Position,
    Mail,
    Department,
    Idnumber,
  ]),
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
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

app.delete('/delete/:Idnumber',(req,res)=>{
  const Idnumber = req.params.Idnumber;
  db.query("DELETE FROM employees WHERE Idnumber=?",Idnumber,(err,result)=>{
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })
})

app.get("/", (req, res) => {
  res.send("dene");
});

app.listen(3001, () => {
  console.log("hello");
});


