import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PageTitle from '../../../Layout/AppMain/PageTitle';
import TransactionForm from './Examples/TransactionForm';

class Transaction extends React.Component {
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
            heading='Transaction Report'
            subheading='Your transactions'
            icon='pe-7s-notebook'
          />
          <TransactionForm />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Transaction;
