import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const CardComp = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150px"
          width="150px"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
          alt="loading"
        />
        <CardTitle className="text-primary">
          <h1>
            <span className="p-2">{details.name?.title}</span>
            <span className="p-2">{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>
          <CardText>
            <FaMapMarkedAlt />
            {details.location?.city}
            <p>{details.phone}</p>
          </CardText>
        </CardTitle>
      </CardBody>
    </Card>
  );
};
export default CardComp;
