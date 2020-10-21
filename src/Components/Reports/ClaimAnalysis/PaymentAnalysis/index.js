import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import PaymentAnalysisForm from './Examples/PaymentAnalysisForm';

class PaymentAnalysis extends React.Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup
          component='div'
          transitionName='TabsAnimation'
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <PageTitle
            heading='Payment Analysis Report'
            subheading='Your Payment Analysis Report'
            icon='pe-7s-notebook'
          />
          <PaymentAnalysisForm />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default PaymentAnalysis;
