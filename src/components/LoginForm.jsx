import React, { useState } from "react";

function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenido de nuevo, ${form.email} ✅`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input type="email" name="email" placeholder="Correo" onChange={handleChange} className="border p-2 w-full" required />
      <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} className="border p-2 w-full" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Iniciar Sesión</button>
    </form>
  );
}

export default LoginForm;
