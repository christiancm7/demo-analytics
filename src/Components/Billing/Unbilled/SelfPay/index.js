import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import SelfPayForm from './Examples/SelfPayForm';

class SelfPay extends React.Component {
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
            heading='Self Pay'
            subheading='Your self paid'
            icon='pe-7s-target'
          />
          <SelfPayForm />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default SelfPay;
