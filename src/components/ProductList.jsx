import React, { useState } from "react";

const initialProducts = [
  { id: 1, name: "Bolsa Reutilizable", price: 50 },
  { id: 2, name: "Cepillo de Bambú", price: 30 },
  { id: 3, name: "Botella de Acero", price: 120 },
];

function ProductList() {
  const [products] = useState(initialProducts);

  return (
    <ul className="space-y-2">
      {products.map((product) => (
        <li key={product.id} className="border p-2 rounded shadow-sm flex justify-between">
          <span>{product.name}</span>
          <span className="font-bold">${product.price}</span>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
