import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import EobsForm from './Examples/EobsForm';

class Eobs extends React.Component {
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
            heading='EOBS'
            subheading='Your EOBS payments'
            icon='pe-7s-anchor'
          />
          <EobsForm />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Eobs;
