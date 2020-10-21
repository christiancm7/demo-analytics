import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import ClaimForm from './Examples/ClaimForm';

class Claims extends React.Component {
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
            heading='Claims'
            subheading='Manage Claims'
            icon='pe-7s-cash'
          />
          <ClaimForm />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Claims;
