import React from "react";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">EcoVida - Sprint 1</h1>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Registro de Usuario</h2>
        <RegisterForm />
      </div>
    </div>
  );
}

export default App;
