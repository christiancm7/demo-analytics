import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import ProductionForm from './Examples/ProductionForm';

class Production extends React.Component {
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
            heading='Production'
            subheading='Your production'
            icon='pe-7s-notebook'
          />
          <ProductionForm />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Production;
