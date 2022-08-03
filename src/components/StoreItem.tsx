import { Card } from "react-bootstrap";
import { Product } from "../model/product";

export default function StoreItem({ id, name, price, imgUrl }: Product) {
  return (
    <Card>
      <Card.Img variant="top" src={imgUrl} height="200px" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{price}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
