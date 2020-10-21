import React from "react";
import { Col, Card, CardBody, CardTitle } from "reactstrap";
import { Doughnut } from "react-chartjs-2";

const DonutGraph = (props) => {
  return (
    <Col lg="4">
      <Card className="mb-3">
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <Doughnut dataKey="value" data={props.data} options={props.options} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DonutGraph;
