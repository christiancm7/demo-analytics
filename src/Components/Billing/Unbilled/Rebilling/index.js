import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import RebilledForm from './Examples/RebilledFormn';

class Rebilling extends React.Component {
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
            heading='Rebilling'
            subheading='Your rebilling'
            icon='pe-7s-target'
          />
          <RebilledForm />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Rebilling;
