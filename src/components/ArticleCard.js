import React from "react";

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <h4>Categoría: {article.category}</h4>
      <p>{article.content}</p>
    </div>
  );
}

export default ArticleCard;
