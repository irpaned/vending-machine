import { useEffect, useState } from "react";
import { Item } from "../types/product.dto";

export function useProduct() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return { items };
}
