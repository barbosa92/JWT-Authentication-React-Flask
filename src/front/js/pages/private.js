import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Private = () => {
  const { store, actions } = useContext(Context);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      actions.private();
      setLoad(true);
    }, 2000);
  }, []);

  return (
    <>
      {store.permiso ? (
        <div className="container">
          <h1>Welcome to your private page</h1>
        </div>
      ) : load ? (
        <h1>404 page not found</h1>
      ) : (
        <div
          className="d-flex align-items-center"
          style={{ minHeight: "600px" }}
        >
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      ;
    </>
  );
};
