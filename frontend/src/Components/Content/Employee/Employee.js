import React from "react";
import { useState } from "react";
import Axios from "axios";
function Employee() {
  const [Idnumber, setIdnumber] = useState("");
  const [Name, setName] = useState("");
  const [Surname, setSurname] = useState("");
  const [Password, setPassword] = useState("");
  const [DateofBirth, setDateofBirth] = useState("");
  const [Position, setPosition] = useState("");
  const [Mail, setMail] = useState("");
  const [Department, setDepartment] = useState("");

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      Idnumber: Idnumber,
      Name: Name,
      Surname: Surname,
      Password: Password,
      DateofBirth: DateofBirth,
      Position: Position,
      Mail: Mail,
      Department: Department,
    }).then(() => {
      console.log("success");
    });
  };
  const display = () => {
    Axios.get("http://localhost:3001/employee").then((response) => {
      setEmployeeList(response.data);
    });
  };
  const deleteEmp = (Idnumber) => {
    Axios.delete(`http://localhost:3001/delete/${Idnumber}`);
  };
  const updateEmp = () => {
    Axios.put("http://localhost:3001/update", {
      Name: Name,
      Surname: Surname,
      Password: Password,
      DateofBirth: DateofBirth,
      Position: Position,
      Mail: Mail,
      Department: Department,
      Idnumber: Idnumber,
    }).then((response) => {
      setEmployeeList(
        employeeList.map((val) => {
          return (val.Idnumber = Idnumber
            ? {
                Idnumber: val.Idnumber,
                Name: val.Name,
                Surname: val.Surname,
                Password: val.Password,
                DateofBirth: val.DateofBirth,
                Position: val.Position,
                Mail: val.Mail,
                Department: val.Department,
              }
            : val);
        })
      );
    });
  };

  return (
    <div>
      <div className="texts">
        <label>Tc NO:</label>
        <input
          type="text"
          name="tc"
          onChange={(event) => {
            setIdnumber(event.target.value);
          }}
        ></input>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <label>Surname:</label>
        <input
          type="text"
          name="Surname"
          onChange={(event) => {
            setSurname(event.target.value);
          }}
        ></input>
        <label>Password</label>
        <input
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        <label>DateofBirth:</label>
        <input
          type="date"
          name="DateofBirth"
          onChange={(event) => {
            setDateofBirth(event.target.value);
          }}
        ></input>
        <br></br>
        <label>
          <br />
          Position:
        </label>
        <input
          type="text"
          name="Position"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        ></input>
        <label>Mail:</label>
        <input
          type="text"
          name="Mail"
          onChange={(event) => {
            setMail(event.target.value);
          }}
        ></input>
        <label>Department:</label>
        <input
          type="text"
          name="Department"
          onChange={(event) => {
            setDepartment(event.target.value);
          }}
        ></input>
      </div>
      <div className="butons">
        <button onClick={addEmployee} name="ekle">
          Ekle
        </button>
        <button
          onClick={() => {
            deleteEmp(Idnumber);
          }}
          name="sil"
        >
          Sil
        </button>
        <button onClick={updateEmp} name="güncelle">
          Güncelle
        </button>
        <div className="employees">
          <button onClick={display} name="ekranagetir">
            Ekrana getir
          </button>
          {employeeList.map((val, key) => {
            return (
              <div className="employee">
                <h3>{val.Idnumber}</h3>
                <h3>{val.Name}</h3>
                <h3>{val.Surname}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Employee;
