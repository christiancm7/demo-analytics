import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../Layout/AppMain/PageTitle';
import WorkQueuesTable from './Examples/WorkQueuesTable';

class WorkQueues extends React.Component {
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
            heading='Work Queues'
            subheading='Your Work Queues'
            icon='pe-7s-notebook'
          />
          <WorkQueuesTable />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default WorkQueues;
