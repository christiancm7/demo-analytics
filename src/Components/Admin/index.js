import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

// Forms

import Panels from './Manage/Panels';
import Tests from './Manage/Tests';
import ServiceLines from './Manage/ServiceLines'

import AppHeader from '../Layout/AppHeader/';
import AppSidebar from '../Layout/AppSidebar/';
import AppFooter from '../Layout/AppFooter/';

const Admin = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className='app-main'>
      <AppSidebar />
      <div className='app-main__outer'>
        <div className='app-main__inner'>
          {/* Form Elements */}

          <Route exact path={`${match.url}/manage/panels`} component={Panels} />
          <Route exact path={`${match.url}/manage/tests`} component={Tests} />
          <Route
            exact
            path={`${match.url}/manage/service-lines`}
            component={ServiceLines}
          />
          <Route
            exact
            path={`${match.url}/manage/billing-processing`}
            component={Panels}
          />
          <Route exact path={`${match.url}/manage/hold`} component={Panels} />
          <Route
            exact
            path={`${match.url}/manage/charge-master`}
            component={Panels}
          />
          <Route
            exact
            path={`${match.url}/manage/ar-remarks`}
            component={Panels}
          />
          <Route
            exact
            path={`${match.url}/manage/insurance`}
            component={Panels}
          />
          <Route
            exact
            path={`${match.url}/manage/facility-types`}
            component={Panels}
          />
          <Route
            exact
            path={`${match.url}/manage/facility-details`}
            component={Panels}
          />
          <Route
            exact
            path={`${match.url}/manage/facility-drg`}
            component={Panels}
          />
          <Route
            exact
            path={`${match.url}/manage/documents`}
            component={Panels}
          />
          <Route
            exact
            path={`${match.url}/manage/resource`}
            component={Panels}
          />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Admin;
