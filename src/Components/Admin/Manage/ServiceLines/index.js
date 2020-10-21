import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import PageTitle from "../../../Layout/AppMain/PageTitle";
import ServiceLineGrid from "./Examples/ServiceLineGrid";

class ServiceLines extends React.Component {
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
          <PageTitle
            heading="Service Lines"
            subheading="Manage Service Lines"
            icon="pe-7s-cash"
          />
          <ServiceLineGrid />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default ServiceLines;
