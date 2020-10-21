import React, { Fragment } from 'react';

import { Elastic } from 'react-burgers';
import { Button } from 'reactstrap';

import Drawer from 'react-motion-drawer';

import TimelineEx from './TabsContent/ChatExample';

class HeaderRightDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      openLeft: false,
      openRight: false,
      relativeWidth: false,
      width: 450,
      noTouchOpen: false,
      noTouchClose: false,
    };
  }

  render() {
    const { openRight } = this.state;

    return (
      <Fragment>
        <Drawer
          right
          className='drawer-content-wrapper p-0'
          width={450}
          open={openRight}
          onChange={(open) => this.setState({ openRight: open })}
          noTouchOpen={false}
          noTouchClose={false}
        >
          <div className='drawer-nav-btn'>
            <Elastic
              width={26}
              lineHeight={2}
              lineSpacing={5}
              color='red'
              padding='5px'
              active={this.state.active}
              onClick={() =>
                this.setState({
                  openRight: false,
                  openLeft: false,
                  active: !this.state.active,
                })
              }
            />
          </div>
          <TimelineEx />
        </Drawer>
        <div>
          <Button
            className='btn-info'
            onClick={() =>
              this.setState({
                openRight: !openRight,
                openLeft: false,
                active: !this.state.active,
              })
            }
          >
            Add New
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default HeaderRightDrawer;