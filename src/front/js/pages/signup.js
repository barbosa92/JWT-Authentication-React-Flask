import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [datos, setDatos] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const enviarDatos = () => {
    console.log("Entra en enviar");
    if (password1 === password2) {
      // setDatos({ ...datos, [password]: password1 });
      actions.signup(datos.email, datos.username, password1);
      console.log("Entra en flux");
    } else {
      alert("Las constraseñas deben coincidir");
    }
  };
  return (
    <div className="card-body w-100">
      <form
        name="login"
        action=""
        onSubmit={() => {
          enviarDatos();
        }}
      >
        <div className="input-group form-group mt-3">
          <div className="bg-secondary rounded-start"></div>
          <input
            type="text"
            className="form-control input-registro"
            placeholder="Nombre"
            name="username"
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group form-group mt-3">
          <div className="bg-secondary rounded-start"></div>
          <input
            type="email"
            className="form-control input-registro"
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group form-group mt-3">
          <div className="bg-secondary rounded-start"></div>
          <input
            type="password"
            className="form-control input-registro"
            placeholder="Contraseña"
            name="password"
            onChange={(e) => setPassword1(e.target.value)}
          />
        </div>
        <div className="input-group form-group mt-3">
          <div className="bg-secondary rounded-start"></div>
          <input
            type="password"
            className="form-control input-registro"
            placeholder="Confirmar Contraseña"
            name="password2"
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>

        <div className="form-group mt-3">
          <input
            type="submit"
            value="Registrar"
            className="btn bg-secondary boton float-end text-white w-100"
            name="login-btn"
          />
        </div>
      </form>
    </div>
  );
};
