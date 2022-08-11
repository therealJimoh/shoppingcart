import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem"

export const Store = () => {
  return (
    <>
      <Row md={2} xs={1} ls={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};