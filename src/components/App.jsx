// src/components/RegisterForm.jsx
import React, { useState } from "react";

function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(form.password)) {
      setError("La contraseña debe tener 8 caracteres, 1 número y 1 mayúscula.");
      return;
    }
    setError("");
    alert("Usuario registrado con éxito ✅");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input type="text" name="name" placeholder="Nombre" onChange={handleChange} className="border p-2 w-full" required />
      <input type="email" name="email" placeholder="Correo" onChange={handleChange} className="border p-2 w-full" required />
      <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} className="border p-2 w-full" required />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Registrarse</button>
    </form>
  );
}

export default RegisterForm;
