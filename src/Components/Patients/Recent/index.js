import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../Layout/AppMain/PageTitle';
import RecentPatient from './Examples/RecentPatient';

class Recent extends React.Component {
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
            heading='Recently Opened'
            subheading='Your most recent patient'
            icon='pe-7s-id'
          />
          <RecentPatient />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Recent;
