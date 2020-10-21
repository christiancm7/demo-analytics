import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import { makeData } from './utils';

export default class BatchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      data: '',
    };
  }

  renderSearchResults = (e) => {
    e.preventDefault();
    let results = makeData();
    console.log(results);
    this.setState({
      data: results,
    });
  };

  render() {
    const renderResultsTable = () => {
      if (this.state.data) {
        return <div>Replace</div>;
      } else {
        return null;
      }
    };
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
          <Card className='mb-3'>
            <CardBody>
              <CardTitle>HL7 Patient Status Report</CardTitle>
              <Form>
                <Row form>
                  <Col sm={6} md={3}>
                    <FormGroup>
                      <Label for='startDate'>Start Date</Label>
                      <Input type='date' name='startDate' id='startDate' />
                    </FormGroup>
                  </Col>
                  <Col sm={6} md={3}>
                    <FormGroup>
                      <Label for='endDate'>End Date</Label>
                      <Input type='date' name='endDate' id='endDate' />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Button
                      color='info'
                      className='float-right btn-lg'
                      onClick={this.renderSearchResults}
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
          {renderResultsTable()}
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
