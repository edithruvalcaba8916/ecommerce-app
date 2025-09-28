import React from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 EcoVida Ecommerce</h1>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="font-semibold">Registro</h2>
          <RegisterForm />
          <h2 className="font-semibold mt-6">Iniciar Sesión</h2>
          <LoginForm />
        </div>
        <div>
          <SearchBar />
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default App;
