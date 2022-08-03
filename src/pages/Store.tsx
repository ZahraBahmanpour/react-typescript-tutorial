import { useEffect, useState } from "react";
import { Product } from "../model/product";

export default function Store() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/products");
      const products = await res.json();
      setProducts(products);
    };
    fetchData();
  }, []);
  return <h1>Store</h1>;
}
