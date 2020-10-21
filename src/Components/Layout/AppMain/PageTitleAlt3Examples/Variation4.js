import React, { Component, Fragment } from 'react';

import { ButtonGroup, Button } from 'reactstrap';

export default class TitleComponent4 extends Component {
  render() {
    return (
      <Fragment>
        <ButtonGroup size='sm'>
          <Button className='btn-shadow' color='info'>
            Today
          </Button>
          <Button className='btn-shadow' color='info'>
            Yesterday
          </Button>
          <Button className='btn-shadow' color='info'>
            Last Month
          </Button>
        </ButtonGroup>
      </Fragment>
    );
  }
}
