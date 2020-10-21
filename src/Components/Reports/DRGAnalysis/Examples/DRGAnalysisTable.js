import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

import ReactTable from 'react-table';

import { makeData } from './utils';

export default class DRGAnalysisLTable extends React.Component {
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
                  <CardTitle>Acute Care</CardTitle>
                  <ReactTable
                    data={data}
                    columns={[
                      {
                        columns: [
                          {
                            Header: 'Patient Name',
                            accessor: 'payer',
                          },
                          {
                            Header: 'Patient ID#',
                            id: 'openingBalance',
                          },
                        ],
                      },
                      {
                        columns: [
                          {
                            Header: 'Patient Type',
                          },
                          {
                            Header: 'Admit Date',
                          },
                          {
                            Header: 'Discharge Date',
                          },
                          {
                            Header: 'LOS',
                          },
                          {
                            Header: 'Billed Charges',
                          },
                          {
                            Header: 'DRG',
                          },
                          {
                            Header: 'DRG Weight',
                          },
                          {
                            Header: 'GMLOS',
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
