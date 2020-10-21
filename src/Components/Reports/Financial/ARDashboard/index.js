import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import ARDashboardTable from './Examples/ARDashboardTable';

class ARDashboard extends React.Component {
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
            heading='AR Dashboard'
            subheading='Your AR Dashboard'
            icon='pe-7s-notebook'
          />
          <ARDashboardTable />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default ARDashboard;
