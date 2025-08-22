import React from "react";

const Product = React.memo(({ name, isFav, onToggle, id }) => {
  console.log("Rendering : ", name);
  return (
    <div
      style={{
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <p>
        {name} - {isFav ? "❤️" : "🤍"}
      </p>
      <button onClick={() => onToggle(id)}>
        {isFav ? "💔 Unfavorite" : "❤️ Favorite"}?
      </button>
    </div>
  );
});

export default Product;
