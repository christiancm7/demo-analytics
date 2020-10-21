import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import ProviderPLForm from './Examples/ProviderPLForm';

class Provider extends React.Component {
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
            heading='Provider P&amp;L Report'
            subheading='Your P&amp;L'
            icon='pe-7s-notebook'
          />
          <ProviderPLForm />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Provider;
