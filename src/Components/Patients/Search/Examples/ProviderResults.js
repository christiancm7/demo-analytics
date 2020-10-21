import React, { Fragment } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import ReactTable from 'react-table';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class ProviderResults extends React.Component {
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
          <Card className='main-card mb-3'>
            <CardBody>
              <CardTitle>Results</CardTitle>
              <ReactTable
                data={this.props.data}
                columns={[
                  {
                    Header: 'Name',
                    columns: [
                      {
                        Header: 'First Name',
                        accessor: 'firstName',
                      },
                      {
                        Header: 'Last Name',
                        id: 'lastName',
                        accessor: (d) => d.lastName,
                      },
                    ],
                  },
                  {
                    Header: 'Info',
                    columns: [
                      {
                        Header: 'Age',
                        accessor: 'age',
                      },
                      {
                        Header: 'Status',
                        accessor: 'status',
                      },
                    ],
                  },
                  {
                    Header: 'Stats',
                    columns: [
                      {
                        Header: 'Visits',
                        accessor: 'visits',
                      },
                    ],
                  },
                ]}
                defaultPageSize={10}
                className='-striped -highlight'
              />
            </CardBody>
          </Card>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
