import React, { Fragment } from "react";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import FullWidthBarGraph from "../../../UI/Cards/graphs/FullWidthBarGraph";

class FullWidthBar extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <Row>
          <Col lg="12">
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle>{this.props.name}</CardTitle>
                <FullWidthBarGraph data={this.props.data} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default FullWidthBar;
