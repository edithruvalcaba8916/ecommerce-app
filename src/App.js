// src/App.js
import React from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">EcoVida - Sprint 1</h1>

      {/* Registro */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Registro</h2>
        <RegisterForm />
      </div>

      {/* Login */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Iniciar Sesión</h2>
        <LoginForm />
      </div>

      {/* Buscador */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Buscar Productos</h2>
        <SearchBar />
      </div>

      {/* Lista de productos */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Lista de Productos</h2>
        <ProductList />
      </div>
    </div>
  );
}

export default App;
