import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import PendingHoldResults from './PendingHoldResults';
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

export default class PendingHoldForm extends React.Component {
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
        return <PendingHoldResults />;
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
          <Container fluid>
            <Card className='main-card mb-3'>
              <CardBody>
                <CardTitle>Unbilled - Rebilled</CardTitle>
                <Form>
                  <Row form>
                    <Col md={3}>
                      <FormGroup>
                        <Label for='billingFacility'>Billing Facility</Label>
                        <Input
                          type='text'
                          name='billingFacility'
                          id='billingFacility'
                        />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for='startDate'>Start Date</Label>
                        <Input type='date' name='startDate' id='startDate' />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for='endDate'>End Date</Label>
                        <Input type='date' name='endDate' id='endDate' />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for='select'>Date Type</Label>
                        <Input name='select' type='select'>
                          <option>Billing Date</option>
                          <option>Date of Service</option>
                          <option>Date Added</option>
                          <option>Payment Date</option>
                          <option>Date Added</option>
                          <option>Deposit Date</option>
                          <option>Final Code Date</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={3}>
                      <FormGroup>
                        <Label for='firstName'>First Name</Label>
                        <Input type='name' name='firstName' id='firstName' />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for='lastName'>Last Name</Label>
                        <Input type='name' name='lastName' id='lastName' />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for='episodeCase'>MRN #</Label>
                        <Input type='text' name='mrnNumber' id='mrnNumber' />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>{/* Radio Box Here */}</FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={3}>
                      <FormGroup>
                        <Label for='insuranceCompany'>Insurance Company</Label>
                        <Input
                          type='name'
                          name='insuranceCompany'
                          id='insuranceCompany'
                        />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for='caseType'>Case Type</Label>
                        <Input name='caseType' type='select'>
                          <option selected>Select</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for='type'>Type</Label>
                        <Input name='type' type='select'>
                          <option selected>Select</option>
                          <option>Institutional</option>
                          <option>Professional</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>{/* Radio Box Here */}</FormGroup>
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
          </Container>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
