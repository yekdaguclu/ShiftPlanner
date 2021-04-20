import React from "react";
import { useState } from "react";
import Axios from "axios";
function Employee() {
  const [name, setName] = useState("");
  const [password, setPass] = useState("");

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      password: password,
    }).then(() => {
      console.log("success");
    });
  };
  const display = () => {
    Axios.get("http://localhost:3001/employee").then((response) => {
      setEmployeeList(response.data);
    });
  };

  return (
    <div>
      <div className="texts">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <label>Password</label>
        <input
          type="password"
          onChange={(event) => {
            setPass(event.target.value);
          }}
        ></input>
      </div>

      <div className="butons">
        <button onClick={addEmployee} name="ekle">
          Ekle
        </button>
        <button name="sil">Sil</button>
        <button name="güncelle">Güncelle</button>
        <div className="employees">
          <button onClick={display} name="ekranagetir">
            Ekrana getir
          </button>
          {employeeList.map((val, key) => {
            return (
              <div className="employee">
                <h3>{key}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Employee;
