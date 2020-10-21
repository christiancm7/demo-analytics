import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

// Forms

import Batches from './Billed/Batches';
import Claims from './Billed/Claims';

import Pending from './Unbilled/Pending';
import Rebilling from './Unbilled/Rebilling';
import Selfpay from './Unbilled/SelfPay';

import Eobs from './Misc/EOBS';
import Posting from './Misc/Posting';
import AdjustmentBatches from './Misc/AdjBatches';

// Layout

import AppHeader from '../Layout/AppHeader/';
import AppSidebar from '../Layout/AppSidebar/';
import AppFooter from '../Layout/AppFooter/';

const Billing = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className='app-main'>
      <AppSidebar />
      <div className='app-main__outer'>
        <div className='app-main__inner'>
          {/* Form Elements */}

          <Route
            exact
            path={`${match.url}/billed/batches`}
            component={Batches}
          />
          <Route exact path={`${match.url}/billed/claims`} component={Claims} />
          <Route
            exact
            path={`${match.url}/unbilled/pending`}
            component={Pending}
          />
          <Route
            exact
            path={`${match.url}/unbilled/rebilling`}
            component={Rebilling}
          />
          <Route
            exact
            path={`${match.url}/unbilled/self-pay`}
            component={Selfpay}
          />
          <Route exact path={`${match.url}/misc/eobs`} component={Eobs} />
          <Route exact path={`${match.url}/misc/posting`} component={Posting} />
          <Route
            exact
            path={`${match.url}/misc/adjustment-batches`}
            component={AdjustmentBatches}
          />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Billing;
