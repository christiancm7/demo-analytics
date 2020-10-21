import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {
  Col,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Container,
} from 'reactstrap';

import { makeData } from './utils';
import ProviderResults from './ProviderResults';

export default class ProviderSearch extends React.Component {
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
        return <ProviderResults data={this.state.data} />;
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
                  <Col md={3}>
                    <FormGroup>
                      <Label for='mrn'>NPI</Label>
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
