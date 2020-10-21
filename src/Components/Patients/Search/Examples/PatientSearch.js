import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {
  Col,
  Row,
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
import PatientResults from './PatientResults';

export default class PatientSearch extends React.Component {
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
        return <PatientResults data={this.state.data} />;
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
            <CardBody>
              <CardTitle>Patient Info</CardTitle>
              <Form>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for='firstName'>First Name</Label>
                      <Input type='name' name='firstName' id='firstName' />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for='lastName'>Last Name</Label>
                      <Input type='name' name='lastName' id='lastName' />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label for='dob'>Date of Birth</Label>
                      <Input type='date' name='dob' id='dob' />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for='select'>Type</Label>
                      <Input name='select' type='select'>
                        <option>MRN</option>
                        <option>Legacy MRN</option>
                        <option>Encounter ID</option>
                        <option>SSN</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for='mrn'>#</Label>
                      <Input type='text' name='mrn' id='mrn' />
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
            {renderResultsTable()}
          </Container>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
