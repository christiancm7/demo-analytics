import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import TestForm from './Examples/TestForm';

class Tests extends React.Component {
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
            heading='Tests'
            subheading='Your most recent tests'
            icon='pe-7s-cash'
          />

          <TestForm />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Tests;
