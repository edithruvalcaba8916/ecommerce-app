import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar producto..."
        className="border p-2 flex-1"
      />
      <button onClick={handleSearch} className="bg-gray-700 text-white px-4 py-2 rounded">Buscar</button>
    </div>
  );
}

export default SearchBar;
