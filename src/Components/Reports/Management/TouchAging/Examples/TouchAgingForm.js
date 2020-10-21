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
import TouchAgingGrid from './TouchAgingGrid'
import Switch from "react-switch";

export default class TouchAgingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      isToggleOn: true,
      data: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  handleClick() {
    this.setState(function(prevState) {
      return { isToggleOn: !prevState.isToggleOn };
    });
  }

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
                <CardTitle>Charge Aging Managment Dashboard</CardTitle>
                <Form>
                  <Row form>
                  <Col xs={6} sm={6} md={6} lg={3}>
                      <FormGroup>
                        <Label for='select'>Case Type</Label>
                        <Input name='select' type='select'>
                          <option>All</option>
                          <option>Electronic</option>
                          <option>Paper</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={3}>
                      <FormGroup>
                        <Label for='select'>Insurance</Label>
                        <Input name='select' type='select'>
                          <option>All</option>
                          <option>Electronic</option>
                          <option>Paper</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={3}>
                      <FormGroup>
                        <Label for='select'>Service Line</Label>
                        <Input name='select' type='select'>
                          <option>All</option>
                          <option>Electronic</option>
                          <option>Paper</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={3}>
                      <FormGroup>
                        <Label for='select'>Insurance Type</Label>
                        <Input name='select' type='select'>
                          <option>All</option>
                          <option>Electronic</option>
                          <option>Paper</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <FormGroup>
                        <Label for='procedure' style={{ display: "block"}}>Procedure Fee Totals</Label>
                        <Switch checked={this.state.checked} onChange={this.handleChange} className="mr-2 mb-2" name="procedure" />
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
            <TouchAgingGrid />
          </Container>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
