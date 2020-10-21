import React, { Fragment } from 'react';
import PanelTable from './PanelTable'
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

export default class PanelForm extends React.Component {
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
        return <PanelTable />;
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
                <CardTitle>Manage Panels</CardTitle>
                <Form>
                  <Row form>
                  <Col md={6}>
                      <FormGroup>
                        <Label for='select'>Processing Lab</Label>
                        <Input name='select' type='select'>
                          <option>All</option>
                          <option>Imedx Memorial</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for='select'>Status</Label>
                        <Input name='select' type='select'>
                          <option>All</option>
                          <option>Active</option>
                          <option>Inactive</option>
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
            {renderResultsTable()}
          </Container>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
