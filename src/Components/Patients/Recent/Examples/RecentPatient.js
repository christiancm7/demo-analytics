import React, { Fragment } from 'react';
import './RecentPatient.css';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import { Row, Col, Card, CardBody, Container } from 'reactstrap';

import dummyData from './dummyData';

export default class AnimatedLinesTabsExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      showMore: true,
      transform: true,
      showInkBar: true,
      items: this.getSimpleTabs(),
      selectedTabKey: 0,
      transformWidth: 400,
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  getSimpleTabs = () =>
    dummyData.map(({ name, biography }, index) => ({
      key: index,
      title: name,
      getContent: () => biography,
    }));

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
          <Container fluid>
            <Row>
              <Col md='12'>
                <Card className='mb-3 card-tabs card-tabs-animated info-table-container'>
                  <Tabs
                    tabsWrapperClass='card-header'
                    defaultActiveKey='1'
                    renderTabBar={() => <ScrollableInkTabBar />}
                    renderTabContent={() => <TabContent />}
                  >
                    <TabPane tab='Patient Name' key='1'>
                      <Card>
                        <CardBody>
                          <Row>
                            <Col lg={6} md={6} sm={6} className="info-table-left">
                              <Row>
                                <Col md={6}>
                                  <p>MRN: 000003</p>
                                  <p>SSN: </p>
                                  <p>DOB: 11/20/1942</p>
                                  <p>Phone: 8325465100</p>
                                </Col>
                                <Col md={6}>
                                  <p>Address: POXXXXXXXX</p>
                                  <p>Sex: Female</p>
                                  <p>Race: Native</p>
                                </Col>
                              </Row>
                            </Col>
                            <Col lg={6} md={6} sm={6} className="info-table-right">
                            <Row>
                                <Col md={6}>
                                  <p>MRN: 000003</p>
                                  <p>SSN: </p>
                                  <p>DOB: 11/20/1942</p>
                                  <p>Phone: 8325465100</p>
                                </Col>
                                <Col md={6}>
                                  <p>Address: POXXXXXXXX</p>
                                  <p>Sex: Female</p>
                                  <p>Race: Native</p>
                                </Col>
                              </Row>
                            </Col>
                            </Row>
                        </CardBody>
                      </Card>
                    </TabPane>
                    <TabPane tab='Vital Signs' key='2'></TabPane>
                    <TabPane tab='Medical Issues' key='3'></TabPane>
                    <TabPane tab='Allergies' key='4'></TabPane>
                    <TabPane tab='Medications' key='5'></TabPane>
                    <TabPane tab='Patient Ledger' key='6'></TabPane>
                  </Tabs>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md='12'>
                <Card className='mb-3 card-tabs card-tabs-animated'>
                  <Tabs
                    tabsWrapperClass='card-header'
                    defaultActiveKey='1'
                    renderTabBar={() => <ScrollableInkTabBar />}
                    renderTabContent={() => <TabContent />}
                  >
                    <TabPane tab='Employer' key='1'></TabPane>
                    <TabPane tab='General' key='2'></TabPane>
                    <TabPane tab='Past Visits' key='3'></TabPane>
                    <TabPane tab='Guaranter' key='4'></TabPane>
                    <TabPane tab='Insurance' key='5'></TabPane>
                    <TabPane tab='Contact' key='6'></TabPane>
                    <TabPane tab='Documents' key='7'></TabPane>
                  </Tabs>
                </Card>
              </Col>
            </Row>
          </Container>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
