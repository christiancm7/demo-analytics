import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import FullWidthBarGraph from "../../../UI/Cards/graphs/FullWidthBarGraph";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

class FullWidthBar extends React.Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
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
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default FullWidthBar;
