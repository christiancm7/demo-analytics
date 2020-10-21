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

export default class EobsForm extends React.Component {
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
                <CardTitle>EOBs/ERAs</CardTitle>
                <Form>
                  <Row form>
                    <Col md={4}>
                      <FormGroup>
                        <Label for='chequeNo'>Cheque No</Label>
                        <Input type='name' name='chequeNo' id='chequeNo' />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for='chequeAmount'>Amount</Label>
                        <Input
                          type='name'
                          name='chequeAmount'
                          id='chequeAmount'
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for='ediName'>EDI Name</Label>
                        <Input type='name' name='ediName' id='ediName' />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Button color='info' className='ml-1 float-right btn-lg'>
                        Add EOB
                      </Button>
                      <Button color='info' className='ml-1 float-right btn-lg'>
                        Refresh EOB List
                      </Button>
                      <Button
                        color='info'
                        className='ml-1 float-right btn-lg'
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
