import { useCallback, useState } from "react";
import Product from "./Product";

const initialProducts = [
  { id: 1, name: "Apple", isFav: false },
  { id: 2, name: "Banana", isFav: false },
  { id: 3, name: "Mango", isFav: false },
];

export default function ProductList() {
  const [products, setProducts] = useState(initialProducts);

  const toggleFavorite = useCallback((id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFav: !item.isFav } : item
      )
    );
  }, []);

  return (
    <div>
      {products.map((item) => (
        <Product
          key={item.id}
          name={item.name}
          isFav={item.isFav}
          onToggle={toggleFavorite}
          id={item.id}
        />
      ))}
    </div>
  );
}
