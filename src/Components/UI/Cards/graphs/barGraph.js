import React from "react";
import { Col, Card, CardBody, CardTitle } from "reactstrap";
import { Bar } from "react-chartjs-2";

const BarGraph = (props) => {
  return (
    <Col lg="4">
      <Card className="mb-3">
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <Bar data={props.data} options={props.options} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BarGraph;
