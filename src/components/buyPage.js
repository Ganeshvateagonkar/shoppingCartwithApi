import React, { useState, useEffect } from "react";
import Axios from "axios";

import { Container, Col, Row } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import CardItem from "./CartItem";
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const api_key = "INSERT_YOUR_KEY_HERE";
const localUrl = "https://myjson.dit.upm.es/api/bins/a4b1";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  /* const fetchPhotos=async()=>{
      const response=await Axios.get(url,{
          headers:{
              Authorization:api_key
          }
      })
  }*/

  const fetchPhotos = async () => {
    const { data } = await Axios.get(localUrl);
    const { photos } = data;

    const allPhotos = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: "laptop",
      productPrice: "300",
      id: uuidv4(),
    }));
    setProduct(allPhotos);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);
  return (
    <Container className="fluid ">
      <h1 className="text-success text-center mb-3">Buy Page</h1>

      <Row className="mt-4">
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CardItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
