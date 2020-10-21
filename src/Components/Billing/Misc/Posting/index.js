import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import PostingForm from './Examples/PostingForm';

class Posting extends React.Component {
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
            heading='Posting'
            subheading='Your posting payments'
            icon='pe-7s-anchor'
          />
          <PostingForm />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Posting;
