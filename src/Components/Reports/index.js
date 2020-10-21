import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import ARAging from './Financial/ARAging';
import ARDashboard from './Financial/ARDashboard';
import Collections from './Financial/Collections';
import Production from './Financial/Production';
import Transaction from './Financial/Transaction';
import Provider from './Financial/ProviderPL';
import TouchAging from './Management/TouchAging';
import ClaimAnalysis from './ClaimAnalysis/ClaimAnalysis';
import PaymentAnalysis from './ClaimAnalysis/PaymentAnalysis';
import WorkQueues from './WorkQueues';
import DRGAnalysis from './DRGAnalysis';
import HL7Status from './HL7Status';
import CodingDistribution from './Providers/CodingDistribution';
// Layout

import AppHeader from '../Layout/AppHeader/';
import AppSidebar from '../Layout/AppSidebar/';
import AppFooter from '../Layout/AppFooter/';

const Reports = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className='app-main'>
      <AppSidebar />
      <div className='app-main__outer'>
        <div className='app-main__inner'>
          <Route
            path={`${match.url}/financial/ar-dashboard`}
            component={ARDashboard}
          />
          <Route
            path={`${match.url}/financial/collections`}
            component={Collections}
          />
          <Route path={`${match.url}/financial/ar-aging`} component={ARAging} />
          <Route
            path={`${match.url}/financial/production-report`}
            component={Production}
          />
          <Route
            path={`${match.url}/financial/transaction-report`}
            component={Transaction}
          />
          <Route
            path={`${match.url}/financial/provider-report`}
            component={Provider}
          />
          <Route
            path={`${match.url}/management/touch-report`}
            component={TouchAging}
          />
          <Route
            path={`${match.url}/claim-analysis/claim-report`}
            component={ClaimAnalysis}
          />
          <Route
            path={`${match.url}/claim-analysis/payment-report`}
            component={PaymentAnalysis}
          />
          <Route path={`${match.url}/work-queues`} component={WorkQueues} />
          <Route path={`${match.url}/drg-analysis`} component={DRGAnalysis} />
          <Route path={`${match.url}/hl7-report`} component={HL7Status} />
          <Route
            path={`${match.url}/providers-report/coding-distribution-report`}
            component={CodingDistribution}
          />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Reports;
