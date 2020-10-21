import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Card } from 'reactstrap';
import PageTitle from '../../Layout/AppMain/PageTitle';

import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

// Examples

import ProviderSearch from './Examples/ProviderSearch';
import PatientSearch from './Examples/PatientSearch';

class Search extends React.Component {
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
            heading='Search Patient'
            subheading='Search by Patient or Provider'
            icon='pe-7s-id'
          />
          <Card className='mb-3 card-tabs card-tabs-animated'>
            <Tabs
              tabsWrapperClass='card-header'
              defaultActiveKey='1'
              renderTabBar={() => <ScrollableInkTabBar />}
              renderTabContent={() => <TabContent />}
            >
              <TabPane tab='Patient' key='1'>
                <PatientSearch />
              </TabPane>
              <TabPane tab='Provider' key='2'>
                <ProviderSearch />
              </TabPane>
            </Tabs>
          </Card>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Search;
