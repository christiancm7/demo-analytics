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
                <CardTitle>Today’s Posting</CardTitle>
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
                        <Label for='chequeAmount'>Payer</Label>
                        <Input type='text' name='payer' id='payer' />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for='chequeNo'>Cheque No</Label>
                        <Input type='name' name='chequeNo' id='chequeNo' />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Button color='info' className='ml-1 float-right btn-lg'>
                        Add Post
                      </Button>
                      <Button color='info' className='ml-1 float-right btn-lg'>
                        Print Today’s Posting
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
