import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

import ReactTable from 'react-table';

import { makeData } from './utils';
import PieGraph from '../../../UI/Cards/graphs/pieGraph';

export default class ProviderPLTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
    };
  }

  data = {
    labels: [
      'Not Adjucated',
      'Fee Schedule',
      'Coding',
      'Medical NEcessity',
      'Other',
    ],
    datasets: [
      {
        data: [75.24, 11.18, 5.13, 1.06, 2.35],
        backgroundColor: ['#8dace7', '#71deb9', '#ef869e', '#cc65fe'],
        hoverBackgroundColor: ['#8dace7', '#71deb9', '#ef869e'],
      },
    ],
  };

  pieOptions = {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      position: 'left',
      labels: {
        boxWidth: 10,
      },
    },
  };

  render() {
    const { data } = this.state;

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
          <Row>
            <Col md='8'>
              <Card className='main-card mb-3'>
                <CardBody>
                  <CardTitle>Work Queue Summary</CardTitle>
                  <ReactTable
                    data={data}
                    columns={[
                      {
                        columns: [
                          {
                            Header: 'File Name',
                            accessor: 'payer',
                          },
                          {
                            Header: 'Claims',
                            id: 'openingBalance',
                          },
                        ],
                      },
                      {
                        columns: [
                          {
                            Header: 'Total Charge Amount',
                            accessor: 'billed',
                          },
                          {
                            Header: 'Total Payment Amount',
                          },
                          {
                            Header: 'Total Denied Amount',
                          },
                          {
                            Header: 'Action',
                          },
                        ],
                      },
                    ]}
                    defaultPageSize={10}
                    className='-striped -highlight'
                  />
                </CardBody>
              </Card>
            </Col>
            <PieGraph
              title='Work Queue Summary'
              data={this.data}
              options={this.pieOptions}
              height={250}
            />
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
