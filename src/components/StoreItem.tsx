import { Button, Card } from "react-bootstrap";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { Product } from "../model/product";

export default function StoreItem({ id, name, price, imgUrl }: Product) {
  const { increaseCartQuantity, getItemQuantity } = useShoppingCartContext();
  const quantity = getItemQuantity(id);
  return (
    <Card>
      <Card.Img variant="top" src={imgUrl} height="200px" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{price}$</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add to Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button variant="danger" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
