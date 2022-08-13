import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { currencyFormatter } from "../utils/currencyFormatter";

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const items = storeItems.find((item) => item.id === id);
  if (items == null) return null;

  return (
    <>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center"
      >
        <img
          src={items.imgUrl}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {items.name}{" "}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {currencyFormatter(items.price)}
          </div>
        </div>
        <div> {currencyFormatter(items.price * quantity)} </div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(items.id)}
        >
          &times;
        </Button>
      </Stack>
    </>
  );
};
