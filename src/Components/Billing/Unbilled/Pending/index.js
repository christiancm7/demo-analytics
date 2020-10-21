import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import PengingHoldForm from './Examples/PendingHoldForm';

class Pending extends React.Component {
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
            heading='Pending / On Hold'
            subheading='Your pending payments'
            icon='pe-7s-target'
          />
          <PengingHoldForm />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Pending;
