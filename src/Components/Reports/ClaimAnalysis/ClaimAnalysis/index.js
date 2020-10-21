import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import ClaimAnalysisDropZone from './Examples/ClaimAnalysisDropZone';

class ClaimAnalysis extends React.Component {
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
            heading='Claim Analysis Report'
            subheading='Your Claim Analysis Report'
            icon='pe-7s-notebook'
          />
          <ClaimAnalysisDropZone />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default ClaimAnalysis;
