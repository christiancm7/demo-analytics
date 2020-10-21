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
  Container,
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
          <Container fluid>
            <Card className='main-card mb-3'>
              <CardBody>
                <CardTitle>Manage Billed Batches</CardTitle>
                <Form>
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
                  </Row>
                  <Row form>
                    <Col md={3}>
                      <FormGroup>
                        <Label for='select'>Type</Label>
                        <Input name='select' type='select'>
                          <option>All</option>
                          <option>Electronic</option>
                          <option>Paper</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for='mrn'>MRN</Label>
                        <Input type='text' name='mrn' id='mrn' />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for='episodeCase'>Episode/Case</Label>
                        <Input
                          type='text'
                          name='episodeCase'
                          id='episodeCase'
                        />
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
