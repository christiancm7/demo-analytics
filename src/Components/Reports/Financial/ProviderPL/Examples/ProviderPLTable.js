import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { Row, Col, Card, CardBody } from 'reactstrap';

import ReactTable from 'react-table';

import { makeData } from './utils';

export default class ProviderPLTable extends React.Component {
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
                            Header: 'Physician',
                            accessor: 'payer',
                          },
                          {
                            Header: 'NPI',
                            id: 'openingBalance',
                          },
                        ],
                      },
                      {
                        columns: [
                          {
                            Header: 'Insurance',
                            accessor: 'billed',
                          },
                          {
                            Header: '# of Claims',
                          },
                          {
                            Header: '% of Total Claims',
                          },
                          {
                            Header: 'Total Paid',
                          },
                          {
                            Header: 'Unique Patients',
                          },
                          {
                            Header: 'Claims Paid to Provider',
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
