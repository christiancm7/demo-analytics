import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { Row, Button, Col, Card, CardBody } from 'reactstrap';

import ReactTable from 'react-table';

import { makeData } from './utils';

export default class TouchAgingTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
    };
  }

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
            <Col md='12'>
              <Card className='main-card mb-3'>
                <CardBody>
                  <ReactTable
                    data={data}
                    columns={[
                      {
                        columns: [
                          {
                            Header: 'File Name',
                            accessor: 'fileName',
                          },
                          {
                            Header: 'Billing Date',
                            id: 'billingDate',
                          },
                        ],
                      },
                      {
                        columns: [
                          {
                            Header: 'Date Processed',
                            accessor: 'dateProcessed',
                          },
                          {
                            Header: 'No. Of Claims',
                          },
                          {
                            Header: 'Amount',
                          },
                          {
                            Header: 'Type',
                          },
                          {
                            Header: 'Status',
                          },
                          {
                            Header: '',
                            accessor: 'status',
                            Cell: (row) => (
                              <Button className='btn-info'>
                                Analyze Batch
                              </Button>
                            ),
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
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
