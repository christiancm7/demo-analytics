import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../Layout/AppMain/PageTitle';
import HL7DropZone from './Examples/HL7DropZone';

class HL7Status extends React.Component {
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
            heading='HL7S tatus'
            subheading='Your HL7 Status'
            icon='pe-7s-notebook'
          />
          <HL7DropZone />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default HL7Status;
