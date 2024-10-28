import { useEffect, useState } from "react";
import { Item } from "../types/product.dto";
import axios from "axios";

export function useProduct() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return { items };
}
