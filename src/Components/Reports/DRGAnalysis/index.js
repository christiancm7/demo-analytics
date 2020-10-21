import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../Layout/AppMain/PageTitle';
import DRGAnalysisTable from './Examples/DRGAnalysisTable';

class DRGAnalysis extends React.Component {
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
            heading='DRG Analysis'
            subheading='Your DRG Analysis'
            icon='pe-7s-notebook'
          />
          <DRGAnalysisTable />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default DRGAnalysis;
