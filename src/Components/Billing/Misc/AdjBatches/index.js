import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from './Examples/PageTitle-AdjustmentBatches';
import DataTableEditable from './Examples/EditableTable';

class AdjustmentBatches extends React.Component {
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
            heading='Adjustment Batches'
            subheading='Your Adjustment Batches'
            icon='pe-7s-anchor'
          />
          <DataTableEditable />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default AdjustmentBatches;
