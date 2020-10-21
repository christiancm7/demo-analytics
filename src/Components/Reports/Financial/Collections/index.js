import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import CollectionsForm from './Examples/CollectionsForm';

class Collections extends React.Component {
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
            heading='Collections'
            subheading='Collections Report by Patient'
            icon='pe-7s-notebook'
          />
          <CollectionsForm />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Collections;
