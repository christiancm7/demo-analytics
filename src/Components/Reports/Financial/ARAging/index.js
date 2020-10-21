import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import ARAgingTable from './Examples/ARAgingTable';

class ARAging extends React.Component {
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
            heading='AR Aging'
            subheading='Your AR Aging Information'
            icon='pe-7s-notebook'
          />
          <ARAgingTable />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default ARAging;
