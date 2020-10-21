import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import TransactionTable from './TransactionTable';
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
  Container,
} from 'reactstrap';

import { makeData } from './utils';

export default class TransactionForm extends React.Component {
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
          <Container fluid>
            <Card className='main-card mb-3'>
              <CardBody>
                <CardTitle>Transaction Report</CardTitle>
                <Form>
                  <Row form>
                    <Col md={4}>
                      <FormGroup>
                        <Label for='select'>Provider</Label>
                        <Input name='select' type='select'>
                          <option selected>All</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for='startDate'>Start Date</Label>
                        <Input type='date' name='startDate' id='startDate' />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for='endDate'>End Date</Label>
                        <Input type='date' name='endDate' id='endDate' />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={4}>
                      <FormGroup>
                        <Label for='select'>Date Type</Label>
                        <Input name='select' type='select'>
                          <option>All</option>
                          <option>Inpatient</option>
                          <option>Outpatient</option>
                          <option>Emergency</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for='select'>Show</Label>
                        <Input name='select' type='select'>
                          <option selected>All</option>
                          <option>Inpatient</option>
                          <option>Outpatient</option>
                          <option>Emergency</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for='select'>Case Type</Label>
                        <Input name='select' type='select'>
                          <option selected>All</option>
                          <option>Inpatient</option>
                          <option>Outpatient</option>
                          <option>Emergency</option>
                        </Input>
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
            <TransactionTable />
          </Container>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
