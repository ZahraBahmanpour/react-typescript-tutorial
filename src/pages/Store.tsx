import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
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
  return (
    <>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {products.map((product) => (
          <Col key={product.id}>
            <StoreItem {...product} />
          </Col>
        ))}
      </Row>
    </>
  );
}
