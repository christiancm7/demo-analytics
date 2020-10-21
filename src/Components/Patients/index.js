import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

// Forms

import Search from './Search/index';
import Recent from './Recent';

// Layout

import AppHeader from '../Layout/AppHeader/';
import AppSidebar from '../Layout/AppSidebar/';
import AppFooter from '../Layout/AppFooter/';

const Patients = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className='app-main'>
      <AppSidebar />
      <div className='app-main__outer'>
        <div className='app-main__inner'>
          {/* Form Elements */}

          <Route path={`${match.url}/search`} component={Search} />
          <Route path={`${match.url}/recent`} component={Recent} />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Patients;
