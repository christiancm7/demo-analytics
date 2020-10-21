import React, { Fragment } from 'react';

import {
  Row,
  Col,
  Button,
  CardHeader,
  Container,
  Card,
  CardFooter,
} from 'reactstrap';

import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import Ionicon from 'react-ionicons';
import { IoIosAnalytics } from 'react-icons/io';

import CountUp from 'react-countup';
import Select from 'react-select';

const options = [
  { value: '1', label: 'Today' },
  { value: '2', label: 'Last Week' },
  { value: '3', label: 'Last 30 Days' },
  { value: '4', label: 'Last 3 Months' },
  { value: '5', label: 'Last Year' },
];

class OverviewBar extends React.Component {
  render() {
    return (
      <Fragment>
        <Container fluid>
          <Card className='mb-3'>
            <CardHeader className='card-header-tab z-index-6'>
              <div className='card-header-title font-size-lg text-capitalize font-weight-normal'>
                <i className='header-icon lnr-charts icon-gradient bg-happy-green'>
                  {' '}
                </i>
                Site Performance
              </div>
              <div className='btn-actions-pane-right text-capitalize'>
                <span className='d-inline-block ml-2' style={{ width: 200 }}>
                  <Select
                    // value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                  />
                </span>
              </div>
            </CardHeader>
            <Row className='no-gutters'>
              <Col sm='6' md='4' xl='4'>
                <div className='card no-shadow rm-border bg-transparent widget-chart text-left'>
                  <div className='icon-wrapper rounded-circle'>
                    <div className='icon-wrapper-bg opacity-10 bg-warning' />
                    <i className='lnr-chart-bars text-dark opacity-8' />
                  </div>
                  <div className='widget-chart-content'>
                    <div className='widget-subheading'>Cash Deposits</div>
                    <div className='widget-numbers'>1,7M</div>
                    <div className='widget-description opacity-8 text-focus'>
                      <div className='d-inline text-danger pr-1'>
                        <FontAwesomeIcon icon={faAngleDown} />
                        <span className='pl-1'>54.1%</span>
                      </div>
                      less earnings
                    </div>
                  </div>
                </div>
                <div className='divider m-0 d-md-none d-sm-block' />
              </Col>
              <Col sm='6' md='4' xl='4'>
                <div className='card no-shadow rm-border bg-transparent widget-chart text-left'>
                  <div className='icon-wrapper rounded-circle'>
                    <div className='icon-wrapper-bg opacity-9 bg-danger' />
                    <i className='lnr-graduation-hat text-white' />
                  </div>
                  <div className='widget-chart-content'>
                    <div className='widget-subheading'>Invested Dividents</div>
                    <div className='widget-numbers'>
                      <CountUp
                        start={0}
                        end={8.7}
                        separator=''
                        decimals={0}
                        decimal=','
                        prefix=''
                        useEasing={false}
                        suffix='M'
                        duration='5'
                      />
                    </div>
                    <div className='widget-description opacity-8 text-focus'>
                      Grow Rate:
                      <span className='text-info pl-1'>
                        <FontAwesomeIcon icon={faAngleDown} />
                        <span className='pl-1'>14.1%</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='divider m-0 d-md-none d-sm-block' />
              </Col>
              <Col sm='12' md='4' xl='4'>
                <div className='card no-shadow rm-border bg-transparent widget-chart text-left'>
                  <div className='icon-wrapper rounded-circle'>
                    <div className='icon-wrapper-bg opacity-9 bg-success' />
                    <i className='lnr-apartment text-white' />
                  </div>
                  <div className='widget-chart-content'>
                    <div className='widget-subheading'>Capital Gains</div>
                    <div className='widget-numbers text-success'>
                      <CountUp
                        start={0}
                        end={563}
                        separator=''
                        decimals={0}
                        decimal='.'
                        prefix='$'
                        useEasing={false}
                        suffix=''
                        duration='7'
                      />
                    </div>
                    <div className='widget-description text-focus'>
                      Increased by
                      <span className='text-warning pl-1'>
                        <FontAwesomeIcon icon={faAngleUp} />
                        <span className='pl-1'>7.35%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <CardFooter className='text-center d-block p-3'>
              <Button
                color='info'
                className='btn-pill btn-shadow btn-wide fsize-1'
                size='lg'
              >
                <span className='mr-2 opacity-7'>
                  {/* <Ionicon color="#ffffff" icon="ios-analytics-outline" beat={true}/> */}
                  <IoIosAnalytics color='#ffffff' />
                </span>
                <span className='mr-1'>View Complete Report</span>
              </Button>
            </CardFooter>
          </Card>
        </Container>
      </Fragment>
    );
  }
}

export default OverviewBar;
