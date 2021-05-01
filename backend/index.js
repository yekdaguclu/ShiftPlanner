const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");


const bcrypt = require('bcrypt');
const saltRounds = 10;

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

  bcrypt.hash(Password,saltRounds,(err,hash)=>{
    db.query("INSERT INTO employees (Idnumber,Name,Surname,Password,DateofBirth,Position,Mail,Department) VALUES (?,?,?,?,?,?,?,?)", [
    Idnumber,
    Name,
    Surname,
    hash,
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
  })

  
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

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});


app.post("/login",(req,res)=>{
  const Idnumber = req.body.Idnumber;
  const Password = req.body.Password;

  db.query("SELECT * FROM employees WHERE Idnumber = ?;"),Idnumber,(err,result)=>{
    if(err){
      res.send({err:err})
    }
    if(result.length>0){
      bcrypt.compare(Password,result[0].Password,(err,response)=>{
        if(response){
          res.send(result)
        }else{
          res.send({message: "Wrong id or password"})
        }
      })
    }
    else{
      res.send({message: "User does not exist"})
    }
  }

})

app.get("/", (req, res) => {
  res.send("dene");
});

app.listen(3001, () => {
  console.log("hello");
});


