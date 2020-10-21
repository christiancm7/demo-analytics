import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';

class CodingDistribution extends React.Component {
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
            heading='Coding Distribution Report'
            subheading='Your Coding Distribution info'
            icon='pe-7s-notebook'
          />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default CodingDistribution;
