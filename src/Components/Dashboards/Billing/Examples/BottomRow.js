import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import DonutGraph from "../../../UI/Cards/graphs/DonutGraph";
import BarGraph from "../../../UI/Cards/graphs/barGraph";

import { Row } from "reactstrap";

const doughnutOptions = {
  maintainAspectRatio: true,
  responsive: true,
  legend: {
    position: "right",
    labels: {
      boxWidth: 10,
    },
  },
};

const barOptions = {
  maintainAspectRatio: true,
  responsive: true,
  legend: {
    display: false,
    labels: {
      boxWidth: 10,
    },
  },
};

const BottomRow = (props) => {
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
          <BarGraph
            title="Top 5 Underpayments"
            data={props.underPaymentData}
            options={barOptions}
          />
          <DonutGraph
            title="Top 5 CPT Codes"
            data={props.CPTCodeData}
            options={doughnutOptions}
          />
          <DonutGraph
            title="Top Services by Payer"
            data={props.topServicesPayerData}
            options={doughnutOptions}
          />
        </Row>
      </CSSTransitionGroup>
    </Fragment>
  );
};

export default BottomRow;
