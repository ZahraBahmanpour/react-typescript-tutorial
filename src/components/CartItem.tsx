import { Button, Stack } from "react-bootstrap";
import {
  CartItem as CartItemModel,
  useShoppingCartContext,
} from "../context/ShoppingCartContext";

export default function CartItem({ product, quantity }: CartItemModel) {
  const { removeFromCart } = useShoppingCartContext();

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={product.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        alt={product.name}
      />
      <div className="me-auto">
        <div>
          {product.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {product.price}
        </div>
      </div>
      <div> {product.price * quantity}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(product.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
