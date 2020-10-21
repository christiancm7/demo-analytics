import React, { Component, Fragment } from 'react';
import './HighlightsBox.css';
import {
  TabContent,
  TabPane,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Button,
  CardBody,
  ButtonGroup,
} from 'reactstrap';

import {
  LineChart,
  Line,
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import {
  faAngleUp,
  faAngleDown,
  faDotCircle,
} from '@fortawesome/free-solid-svg-icons';

import PerfectScrollbar from 'react-perfect-scrollbar';

import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../assets/utils/images/avatars/3.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classnames from 'classnames';
import CountUp from 'react-countup';

const data55 = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Page C', uv: 2000, pv: 6800, amt: 2290 },
  { name: 'Page D', uv: 4780, pv: 7908, amt: 2000 },
  { name: 'Page E', uv: 2890, pv: 9800, amt: 2181 },
  { name: 'Page F', uv: 1390, pv: 3800, amt: 1500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

function boxMullerRandom() {
  let phase = true,
    x1,
    x2,
    w;

  return (function () {
    if (phase) {
      do {
        x1 = 2.0 * Math.random() - 1.0;
        x2 = 2.0 * Math.random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);

      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      return x1 * w;
    } else {
      return x2 * w;
    }
  })();
}

export default class HIghlightsBox extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.togglePop = this.togglePop.bind(this);

    this.state = {
      activeTab: '1',
      activeTab2: '111',
      data: [],
      value: 48,
      popoverOpen: false,
    };
    setInterval(
      () =>
        this.setState({
          data: this.state.data.concat([boxMullerRandom()]),
        }),
      350
    );
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  toggle2(tab) {
    if (this.state.activeTab2 !== tab) {
      this.setState({
        activeTab2: tab,
      });
    }
  }

  togglePop() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  render() {
    return (
      <Fragment>
        <Col sm='6' lg='6'>
          <Card className='mb-3'>
            <CardHeader className='card-header-tab'>
              <div className='card-header-title font-size-lg text-capitalize font-weight-normal'>
                Backlog Items
              </div>

              <div className='btn-actions-pane-right'>
                <ButtonGroup size='sm'>
                  <Button
                    caret='true'
                    color='dark'
                    className={
                      'btn-shadow ' +
                      classnames({
                        active: this.state.activeTab2 === '222',
                      })
                    }
                    onClick={() => {
                      this.toggle2('222');
                    }}
                  >
                    Last Month
                  </Button>
                  <Button
                    color='dark'
                    className={
                      'btn-shadow ' +
                      classnames({
                        active: this.state.activeTab2 === '111',
                      })
                    }
                    onClick={() => {
                      this.toggle2('111');
                    }}
                  >
                    Current Month
                  </Button>
                </ButtonGroup>
              </div>
            </CardHeader>
            <CardBody>
              <TabContent activeTab={this.state.activeTab2}>
                <TabPane tabId='222'>
                  <div className='card mb-3 widget-chart widget-chart2 text-left p-0'>
                    <div className='widget-chat-wrapper-outer'>
                      <div className='widget-chart-content pt-3 pr-3 pl-3'>
                        <div className='widget-chart-flex'>
                          <div className='widget-numbers'>
                            <div className='widget-chart-flex'>
                              <div>
                                <small className='opacity-5'>$</small>
                                <CountUp
                                  start={0}
                                  end={368}
                                  separator=''
                                  decimals={0}
                                  decimal=','
                                  prefix=''
                                  duration='10'
                                />
                              </div>
                              <div className='widget-title ml-2 opacity-5 font-size-lg text-muted'>
                                Total Leads
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0'>
                        <ResponsiveContainer height='100%'>
                          <AreaChart
                            data={data55}
                            margin={{
                              top: -10,
                              right: 0,
                              left: 0,
                              bottom: 0,
                            }}
                          >
                            <Tooltip />
                            <Area
                              type='monotoneX'
                              dataKey='uv'
                              strokeWidth={0}
                              fill='#16aaff'
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                  <h6 className='text-muted text-uppercase font-size-md opacity-5 font-weight-normal'>
                    Top Authors
                  </h6>
                  <ListGroup className='rm-list-borders' flush>
                    <ListGroupItem>
                      <div className='widget-content p-0'>
                        <div className='widget-content-wrapper'>
                          <div className='widget-content-left mr-3'>
                            <img
                              width={42}
                              className='rounded-circle'
                              src={avatar1}
                              alt=''
                            />
                          </div>
                          <div className='widget-content-left'>
                            <div className='widget-heading'>
                              Ella-Rose Henry
                            </div>
                            <div className='widget-subheading'>
                              Web Developer
                            </div>
                          </div>
                          <div className='widget-content-right'>
                            <div className='font-size-xlg text-muted'>
                              <small className='opacity-5 pr-1'>$</small>
                              <CountUp
                                start={0}
                                end={129}
                                separator=''
                                decimals={0}
                                decimal='.'
                                prefix=''
                                duration='10'
                              />
                              <small className='text-danger pl-2'>
                                <FontAwesomeIcon icon={faAngleDown} />
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem>
                      <div className='widget-content p-0'>
                        <div className='widget-content-wrapper'>
                          <div className='widget-content-left mr-3'>
                            <img
                              width={42}
                              className='rounded-circle'
                              src={avatar2}
                              alt=''
                            />
                          </div>
                          <div className='widget-content-left'>
                            <div className='widget-heading'>Ruben Tillman</div>
                            <div className='widget-subheading'>UI Designer</div>
                          </div>
                          <div className='widget-content-right'>
                            <div className='font-size-xlg text-muted'>
                              <small className='opacity-5 pr-1'>$</small>
                              <CountUp
                                start={0}
                                end={54}
                                separator=''
                                decimals={0}
                                decimal='.'
                                prefix=''
                                duration='15'
                              />
                              <small className='text-success pl-2'>
                                <FontAwesomeIcon icon={faAngleUp} />
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem>
                      <div className='widget-content p-0'>
                        <div className='widget-content-wrapper'>
                          <div className='widget-content-left mr-3'>
                            <img
                              width={42}
                              className='rounded-circle'
                              src={avatar3}
                              alt=''
                            />
                          </div>
                          <div className='widget-content-left'>
                            <div className='widget-heading'>
                              Vinnie Wagstaff
                            </div>
                            <div className='widget-subheading'>
                              Java Programmer
                            </div>
                          </div>
                          <div className='widget-content-right'>
                            <div className='font-size-xlg text-muted'>
                              <small className='opacity-5 pr-1'>$</small>
                              <CountUp
                                start={0}
                                end={431}
                                separator=''
                                decimals={0}
                                decimal='.'
                                prefix=''
                                duration='20'
                              />
                              <small className='text-warning pl-2'>
                                <FontAwesomeIcon icon={faDotCircle} />
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ListGroupItem>
                  </ListGroup>
                </TabPane>
                <TabPane tabId='111'>
                  <div className='card mb-3 widget-chart widget-chart2 text-left p-0'>
                    <div className='widget-chat-wrapper-outer'>
                      <div className='widget-chart-content pt-3 pr-3 pl-3'>
                        <div className='widget-chart-flex'>
                          <div className='widget-numbers'>
                            <div className='widget-chart-flex'>
                              <div>
                                <small className='opacity-5'>$</small>
                                <CountUp
                                  start={0}
                                  end={851}
                                  separator=''
                                  decimals={0}
                                  decimal=','
                                  prefix=''
                                  duration='10'
                                />
                              </div>
                              <div className='widget-title ml-2 opacity-5 font-size-lg text-muted'>
                                Sales
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0'>
                        <ResponsiveContainer height='100%'>
                          <LineChart
                            data={data55}
                            margin={{
                              top: 5,
                              right: 10,
                              left: 10,
                              bottom: 0,
                            }}
                          >
                            <Line
                              type='monotone'
                              dataKey='pv'
                              stroke='#3ac47d'
                              strokeWidth={3}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                  <h6 className='text-muted text-uppercase font-size-md opacity-5 font-weight-normal'>
                    Highlights
                  </h6>
                  <div className='scroll-area-sm'>
                    <PerfectScrollbar>
                      <ListGroup
                        className='rm-list-borders rm-list-borders-scroll'
                        flush
                      >
                        <ListGroupItem>
                          <div className='widget-content p-0'>
                            <div className='widget-content-outer'>
                              <div className='widget-content-wrapper'>
                                <div className='widget-content-left'>
                                  <div className='widget-heading'>
                                    Total Orders
                                  </div>
                                  <div className='widget-subheading'>
                                    Last year expenses
                                  </div>
                                </div>
                                <div className='widget-content-right'>
                                  <div className='widget-numbers text-success'>
                                    1896
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className='widget-content p-0'>
                            <div className='widget-content-outer'>
                              <div className='widget-content-wrapper'>
                                <div className='widget-content-left'>
                                  <div className='widget-heading'>Clients</div>
                                  <div className='widget-subheading'>
                                    Total Clients Profit
                                  </div>
                                </div>
                                <div className='widget-content-right'>
                                  <div className='widget-numbers text-primary'>
                                    $12.6k
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem>
                          <div className='widget-content p-0'>
                            <div className='widget-content-outer'>
                              <div className='widget-content-wrapper'>
                                <div className='widget-content-left'>
                                  <div className='widget-heading'>
                                    Products Sold
                                  </div>
                                  <div className='widget-subheading'>
                                    Total revenue streams
                                  </div>
                                </div>
                                <div className='widget-content-right'>
                                  <div className='widget-numbers text-warning'>
                                    $3M
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                      </ListGroup>
                    </PerfectScrollbar>
                  </div>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Fragment>
    );
  }
}
