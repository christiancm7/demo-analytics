import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { Row, Col, Card, CardBody } from 'reactstrap';

import ReactTable from 'react-table';

import { makeData } from './utils';

export default class TransactionTable extends React.Component {
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
                            Header: 'First Name',
                            accessor: 'payer',
                          },
                          {
                            Header: 'Last Name',
                            id: 'openingBalance',
                          },
                        ],
                      },
                      {
                        columns: [
                          {
                            Header: 'DOB',
                            accessor: 'billed',
                          },

                          {
                            Header: 'Insurance',
                          },
                          {
                            Header: 'Insurance Plan',
                          },
                          {
                            Header: 'Policy Number',
                          },
                          {
                            Header: 'Sample ID',
                          },
                          {
                            Header: 'Claim Number',
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
