import React from "react";

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  const categories = ["Todas", "Matemáticas", "Historia", "Física", "Química", "Literatura"];

  return (
    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;
