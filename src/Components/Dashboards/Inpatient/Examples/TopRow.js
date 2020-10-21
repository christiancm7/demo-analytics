import React from "react";

import { Row, Col, Card } from "reactstrap";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopRow = (props) => {
  return (
    <Row>
      <Col md="4" lg="3">
        <Card className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left">
          <div className="widget-chat-wrapper-outer">
            <div className="widget-chart-content">
              <h6 className="widget-subheading">Amount Billed</h6>
              <div className="widget-chart-flex">
                <div className="widget-numbers mb-0 w-100">
                  <div className="widget-chart-flex">
                    <div className="fsize-4 text-success">
                      <small className="opacity-5 text-muted">$</small>
                      {props.data.amountBilled}
                    </div>
                    <div className="ml-auto">
                      <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                        <span className="text-success pl-2">
                          <span className="pr-1">
                            <FontAwesomeIcon icon={faAngleUp} />
                          </span>
                          4%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Col>
      <Col md="4" lg="3">
        <Card className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left">
          <div className="widget-chat-wrapper-outer">
            <div className="widget-chart-content">
              <h6 className="widget-subheading">Amount Paid</h6>
              <div className="widget-chart-flex">
                <div className="widget-numbers mb-0 w-100">
                  <div className="widget-chart-flex">
                    <div className="fsize-4 text-success">
                      <small className="opacity-5 text-muted">$</small>
                      {props.data.amountPaid}
                    </div>
                    <div className="ml-auto">
                      <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                        <span className="text-success pl-2">
                          <span className="pr-1">
                            <FontAwesomeIcon icon={faAngleUp} />
                          </span>
                          16%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Col>
      <Col md="4" lg="3">
        <Card className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left">
          <div className="widget-chat-wrapper-outer">
            <div className="widget-chart-content">
              <h6 className="widget-subheading">Amount Denied</h6>
              <div className="widget-chart-flex">
                <div className="widget-numbers mb-0 w-100">
                  <div className="widget-chart-flex">
                    <div className="fsize-4 text-success">
                      <small className="opacity-5 text-muted">$</small>
                      {props.data.amountDenied}
                    </div>
                    <div className="ml-auto">
                      <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                        <span className="text-success pl-2">
                          <span className="pr-1">
                            <FontAwesomeIcon icon={faAngleUp} />
                          </span>
                          16%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Col>
      <Col md="6" lg="3">
        <Card className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left">
          <div className="widget-chat-wrapper-outer">
            <div className="widget-chart-content">
              <h6 className="widget-subheading">Adjucation Rate</h6>
              <div className="widget-chart-flex">
                <div className="widget-numbers mb-0 w-100">
                  <div className="widget-chart-flex">
                    <div className="fsize-4 text-danger">{props.data.AR90}</div>
                    <div className="ml-auto">
                      <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                        <span className="text-danger pl-2">
                          <span className="pr-1">
                            <FontAwesomeIcon icon={faAngleDown} />
                          </span>
                          85%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default TopRow;
