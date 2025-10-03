import React, { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validaciones
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!formData.email.includes("@")) newErrors.email = "Correo inválido.";
    if (formData.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres.";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "Debe contener al menos una letra mayúscula.";
    } else if (!/\d/.test(formData.password)) {
      newErrors.password = "Debe incluir al menos un número.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="p-4 bg-green-100 rounded-lg text-green-700">
        ✅ Registro exitoso. Bienvenido/a, {formData.name}.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Nombre</label>
        <input
          type="text"
          className="w-full border rounded p-2"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Correo</label>
        <input
          type="email"
          className="w-full border rounded p-2"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Contraseña</label>
        <input
          type="password"
          className="w-full border rounded p-2"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Registrarse
      </button>

      {/* Botón de inicio con Google */}
      <button
        type="button"
        className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 mt-2"
        onClick={() => alert("Google Sign-In simulado 🚀")}
      >
        Iniciar sesión con Google
      </button>
    </form>
  );
}

export default RegisterForm;
