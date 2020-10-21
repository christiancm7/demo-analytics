import React, { Fragment } from 'react';

import {
  Button,
  Card,
  CardBody,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

import Dropzone from 'react-dropzone';
import HL7Table from './HL7Table';
import HL7Form from './HL7Form';

class HL7Dropzone extends React.Component {
  constructor() {
    super();
    this.state = {
      files: [],
    };
  }

  onDrop(files) {
    this.setState({ files });
  }

  onCancel() {
    this.setState({
      files: [],
    });
  }

  render() {
    const files = this.state.files.map((file) => (
      <ListGroupItem key={file.name}>
        {file.name} - {file.size} bytes
      </ListGroupItem>
    ));
    return (
      <Fragment>
        <Card className='mb-3'>
          <CardBody>
            <Row>
              <Col md='8'>
                <div className='dropzone-wrapper dropzone-wrapper-sm'>
                  <Dropzone
                    onDrop={this.onDrop.bind(this)}
                    onFileDialogCancel={this.onCancel.bind(this)}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <div className='dropzone-content'>
                          <p>
                            Try dropping your Claim Analysis files here, or
                            click to select files to upload.
                          </p>
                        </div>
                      </div>
                    )}
                  </Dropzone>
                </div>
              </Col>
              <Col md='4'>
                <b className='mb-2 d-block'>Dropped Files</b>
                <ListGroup>{files}</ListGroup>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Button
                  color='info'
                  className='float-right btn-lg'
                  onClick={this.renderSearchResults}
                >
                  Import
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <HL7Form />
        <HL7Table />
      </Fragment>
    );
  }
}

export default HL7Dropzone;
