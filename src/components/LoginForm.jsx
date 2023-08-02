import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log("Email:", email); // Mostrar el email antes de realizar la solicitud
      console.log("Contraseña:", password); // Mostrar la contraseña antes de realizar la solicitud

      const response = await axios.get(
        "http://cooproject.test/api/administrador/auth/" + email
      );
      const userData = response.data;

      console.log("Respuesta de la API:", userData); // Mostrar la respuesta de la API

      if (userData.password === password) {
        console.log("Inicio de sesión exitoso. Datos del usuario:", userData);
        navigate("/home");
      } else {
        console.log("Contraseña incorrecta");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
    </>
  );
};

export default LoginForm;
