import React, { Fragment } from 'react';

import AppHeader from '../Layout/AppHeader/';
import AppSidebar from '../Layout/AppSidebar/';
import AppFooter from '../Layout/AppFooter/';

import ProfileBlock from './Examples/ProfileBlock';
import TopBar from './Examples/OverviewBar';
import TaskList from './Examples/TaskList';
import HighlightsBox from './Examples/HighlightsBox';
import { Row } from 'reactstrap';

const Overview = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className='app-main'>
      <AppSidebar />
      <div className='app-main__outer'>
        <div className='app-main__inner'>
          <ProfileBlock />
          <TopBar />
          <Row>
            <TaskList />
            <HighlightsBox />
          </Row>
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Overview;
