import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import BatchForm from './Examples/BatchForm';
import BatchTable from './Examples/BatchTable';

class Batches extends React.Component {
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
            heading='Batches'
            subheading='Your most recent patient'
            icon='pe-7s-cash'
          />

          <BatchForm />
          <BatchTable />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Batches;
