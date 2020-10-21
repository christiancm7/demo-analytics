import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { Row, Col, Card, CardBody } from 'reactstrap';

import ReactTable from 'react-table';

import { makeData } from './utils';

export default class HL7Table extends React.Component {
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
                            Header: 'DOS',
                            accessor: 'billed',
                          },
                          {
                            Header: 'Insurance',
                          },
                          {
                            Header: 'Sample ID',
                          },
                          {
                            Header: 'Date Created',
                          },
                          {
                            Header: 'Orginal Status',
                          },
                          {
                            Header: 'Current Status',
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
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
