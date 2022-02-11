import React from "react";
import {
  Card,
  CardImg,
  Button,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";

const CardItem = ({ product, addInCart }) => {
  return (
    <Card className="mt-4 mb-4">
      <CardImg top height="250" width="100%" src={product.smallImage} />
      <CardBody className="text-center">
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="secondary">
          price: Rs {product.productPrice}
        </CardText>
        <Button
          color="success"
          className="mb-4"
          onClick={() => addInCart(product)}
        >
          Buy Now
        </Button>
      </CardBody>
    </Card>
  );
};

export default CardItem;
