import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import PaymentAnalysisTable from './PaymentAnalysisTable';
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

export default class PaymentAnalysisForm extends React.Component {
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
                <CardTitle>EDI Analysis 835</CardTitle>
                <Form>
                  <Row form>
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
                    <Col md={6}>
                      <FormGroup>
                        <Label for='mrn'>EDI Name</Label>
                        <Input type='text' name='ediName' id='ediName' />
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
            <PaymentAnalysisTable />
          </Container>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
