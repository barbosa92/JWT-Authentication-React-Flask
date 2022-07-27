import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </button>
            <ul className="dropdown-menu">
              <li>
                {store.permiso ? (
                  <a
                    className="dropdown-item"
                    href="/login"
                    onClick={() => {
                      sessionStorage.removeItem("token");
                    }}
                  >
                    Logout
                  </a>
                ) : (
                  <a className="dropdown-item" href="/login">
                    Login
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
