import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/DashBoard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-4">Iniciar sesión</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-7"
      >
        <label>
          Correo electrónico:
          <input
            type="email"
            name="email"
            className="ml-3 border border-gray-300 p-2 rounded"
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            className="ml-3 border border-gray-300 p-2 rounded"
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
