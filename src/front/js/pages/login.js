import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Login = () => {
  const navigate = useNavigate();
  const [error, guardarError] = useState(false);
  const { store, actions } = useContext(Context);
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  // const enviarDatos = () => {
  //   console.log("Entra en enviarDatos");
  //   actions.login(datos.email, datos.password);
  //   guardarError(false);
  //   // return alert("Ha habido un fallo");
  // };

  return (
    <div className="container">
      <h1>Login</h1>
      <form
        name="login"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/private");
        }}
      >
        <div className="container">
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>
          <input
            type="submit"
            value="Acceder"
            className="btn bg-secondary boton float-end text-white w-100"
            name="login-btn"
            onClick={() => {
              actions.login(datos.email, datos.password);
            }}
          />
        </div>
      </form>
    </div>
  );
};
