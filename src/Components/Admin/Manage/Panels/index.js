import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from './Examples/PageTitle';
import PanelForm from './Examples/PanelForm';

class Panels extends React.Component {
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
            heading='Panels'
            subheading='Manage your panels'
            icon='pe-7s-cash'
          />

          <PanelForm />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Panels;
