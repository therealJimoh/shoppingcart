import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { currencyFormatter } from "../utils/currencyFormatter";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";

type cart = {
  isOpen: boolean;
};

export const ShoppingCart = ({ isOpen }: cart) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
              Total{" "}
              {currencyFormatter(
                cartItems.reduce((total, cartItem) => {
                  const items = storeItems.find(
                    (item) => item.id === cartItem.id
                  );
                  return total + (items?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
