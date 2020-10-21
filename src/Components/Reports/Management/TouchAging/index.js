import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import TouchAgingForm from './Examples/TouchAgingForm'

class TouchAging extends React.Component {
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
            heading='Touch Aging Report'
            subheading='Your Touch Aging Report'
            icon='pe-7s-notebook'
          />
          <TouchAgingForm />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default TouchAging;
