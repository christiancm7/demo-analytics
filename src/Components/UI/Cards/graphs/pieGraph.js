import React from 'react';
import { Col, Card, CardBody, CardTitle } from 'reactstrap';
import { Pie } from 'react-chartjs-2';

const PieGraph = (props) => {
  return (
    <Col lg='4'>
      <Card>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <Pie
            dataKey='value'
            data={props.data}
            options={props.options}
            height={props.height}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieGraph;
