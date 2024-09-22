import React, { useState } from "react";
import ArticleCard from "./components/ArticleCard";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import './App.css';


const articlesData = [
  { id: 1, title: "Matemáticas para principiantes", category: "Matemáticas", content: "Este es un artículo sobre matemáticas básicas." },
  { id: 2, title: "Historia Universal", category: "Historia", content: "Este es un artículo sobre historia universal." },
  { id: 3, title: "Introducción a la Física", category: "Física", content: "Este es un artículo sobre física." },
  { id: 4, title: "La química del carbono", category: "Química", content: "Este es un artículo sobre química orgánica." },
  { id: 5, title: "Literatura española", category: "Literatura", content: "Este es un artículo sobre literatura española." },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  // Filtrado de artículos según la búsqueda y la categoría
  const filteredArticles = articlesData.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Todas" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="App">
      <h1>Sitio Educativo</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className="articles">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => <ArticleCard key={article.id} article={article} />)
        ) : (
          <p>No se encontraron artículos</p>
        )}
      </div>
    </div>
  );
}

export default App;
