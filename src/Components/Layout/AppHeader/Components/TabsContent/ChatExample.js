import React, { Component, Fragment } from 'react';

import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Card,
  Button,
  Form,
  Col,
  FormGroup,
  Label,
  Input,
  Row,
} from 'reactstrap';

class TimelineEx extends Component {
  render() {
    return (
      <Fragment>
        <h3 className='drawer-heading'>Servers Status</h3>
        <div className=''>
          <PerfectScrollbar>
            <Card>
              <Form>
                <Row form>
                  <Col md={12}>
                    <FormGroup>
                      <Label for='firstName'>First Name</Label>
                      <Input type='name' name='firstName' id='firstName' />
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                      <Label for='lastName'>Last Name</Label>
                      <Input type='name' name='lastName' id='lastName' />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for='startDate'>Start Date</Label>
                      <Input type='date' name='startDate' id='startDate' />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for='endDate'>End Date</Label>
                      <Input type='date' name='endDate' id='endDate' />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label for='select'>Type</Label>
                      <Input name='select' type='select'>
                        <option>All</option>
                        <option>Electronic</option>
                        <option>Paper</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for='mrn'>MRN</Label>
                      <Input type='text' name='mrn' id='mrn' />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for='episodeCase'>Episode/Case</Label>
                      <Input type='text' name='episodeCase' id='episodeCase' />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Button
                      color='info'
                      className='float-right btn-block'
                      onClick={this.renderSearchResults}
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card>
          </PerfectScrollbar>
        </div>
      </Fragment>
    );
  }
}

export default TimelineEx;
