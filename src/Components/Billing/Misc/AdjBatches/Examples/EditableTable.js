import React, { Component, Fragment } from 'react';

import ReactTable from 'react-table';

import { Row, Col, Card, CardBody } from 'reactstrap';

import { makeData } from '../../Posting/Examples/utils';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class DataTableEditable extends Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
    };
    this.renderEditable = this.renderEditable.bind(this);
  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: '#fafafa' }}
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id],
        }}
      />
    );
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
          <div></div>
          <Row>
            <Col md='12'>
              <Card className='main-card mb-3'>
                <CardBody>
                  <ReactTable
                    data={data}
                    columns={[
                      {
                        Header: 'Description',
                        accessor: 'firstName',
                      },
                      {
                        Header: 'Created On',
                        accessor: 'lastName',
                      },
                      {
                        Header: 'Created By',
                        id: 'full',
                        accessor: (d) => (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: d.firstName + ' ' + d.lastName,
                            }}
                          />
                        ),
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
