import React, { Fragment } from 'react';

import {
  Col,
  Button,
  CardHeader,
  Card,
  ListGroup,
  ListGroupItem,
  CardFooter,
  CustomInput,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  UncontrolledButtonDropdown,
} from 'reactstrap';

import {
  faEllipsisH,
  faCheck,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PerfectScrollbar from 'react-perfect-scrollbar';

import avatar2 from '../../../assets/utils/images/avatars/2.jpg';

export const TaskList = () => {
  return (
    <Fragment>
      <Col sm='6' lg='6'>
        <Card className='card-hover-shadow-2x mb-3'>
          <CardHeader className='card-header-tab'>
            <div className='card-header-title font-size-lg text-capitalize font-weight-normal'>
              <i className='header-icon lnr-database icon-gradient bg-malibu-beach'>
                {' '}
              </i>
              Tasks List
            </div>

            <div className='btn-actions-pane-right text-capitalize actions-icon-btn'>
              <UncontrolledButtonDropdown>
                <DropdownToggle className='btn-icon btn-icon-only' color='link'>
                  <i className='pe-7s-menu btn-icon-wrapper' />
                </DropdownToggle>
                <DropdownMenu className='dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link'>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem>
                    <i className='dropdown-icon lnr-inbox'> </i>
                    <span>Menus</span>
                  </DropdownItem>
                  <DropdownItem>
                    <i className='dropdown-icon lnr-file-empty'> </i>
                    <span>Settings</span>
                  </DropdownItem>
                  <DropdownItem>
                    <i className='dropdown-icon lnr-book'> </i>
                    <span>Actions</span>
                  </DropdownItem>
                  <DropdownItem divider />
                  <div className='p-3 text-right'>
                    <Button className='mr-2 btn-shadow btn-sm' color='link'>
                      View Details
                    </Button>
                    <Button className='mr-2 btn-shadow btn-sm' color='info'>
                      Action
                    </Button>
                  </div>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </div>
          </CardHeader>
          <div className='scroll-area-lg'>
            <PerfectScrollbar>
              <div className='p-2'>
                <ListGroup className='todo-list-wrapper' flush>
                  <ListGroupItem>
                    <div className='todo-indicator bg-warning' />
                    <div className='widget-content p-0'>
                      <div className='widget-content-wrapper'>
                        <div className='widget-content-left mr-2'>
                          <CustomInput
                            type='checkbox'
                            id='exampleCustomCheckbox12'
                            label='&nbsp;'
                          />
                        </div>
                        <div className='widget-content-left'>
                          <div className='widget-heading'>
                            Earnings Meeting
                            <div className='badge badge-danger ml-2'>
                              Rejected
                            </div>
                          </div>
                          <div className='widget-subheading'>
                            <i>Written by Bob</i>
                          </div>
                        </div>
                        <div className='widget-content-right widget-content-actions'>
                          <Button
                            className='border-0 btn-transition'
                            outline
                            color='success'
                          >
                            <FontAwesomeIcon icon={faCheck} />
                          </Button>
                          <Button
                            className='border-0 btn-transition'
                            outline
                            color='danger'
                          >
                            <FontAwesomeIcon icon={faTrashAlt} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className='todo-indicator bg-focus' />
                    <div className='widget-content p-0'>
                      <div className='widget-content-wrapper'>
                        <div className='widget-content-left mr-2'>
                          <CustomInput
                            type='checkbox'
                            id='exampleCustomCheckbox1'
                            label='&nbsp;'
                          />
                        </div>
                        <div className='widget-content-left'>
                          <div className='widget-heading'>
                            Finance update video meeting
                          </div>
                          <div className='widget-subheading'>
                            <div>
                              By Johnny
                              <div className='badge badge-pill badge-info ml-2'>
                                NEW
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='widget-content-right widget-content-actions'>
                          <Dropdown
                            className='d-inline-block rm-pointers'
                            // onMouseOver={this.onMouseEnter}
                            // onMouseLeave={this.onMouseLeave}
                            // isOpen={this.state.dropdownOpen}
                            // toggle={this.toggle}
                          >
                            <DropdownToggle
                              color='link'
                              className='border-0 btn-transition'
                            >
                              <FontAwesomeIcon icon={faEllipsisH} />
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem header>Header</DropdownItem>
                              <DropdownItem disabled>Action</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className='todo-indicator bg-primary' />
                    <div className='widget-content p-0'>
                      <div className='widget-content-wrapper'>
                        <div className='widget-content-left mr-2'>
                          <CustomInput
                            type='checkbox'
                            id='exampleCustomCheckbox4'
                            label='&nbsp;'
                          />
                        </div>
                        <div className='widget-content-left flex2'>
                          <div className='widget-heading'>Update Website</div>
                          <div className='widget-subheading'>
                            Show on hover actions!
                          </div>
                        </div>
                        <div className='widget-content-right widget-content-actions'>
                          <Button
                            className='border-0 btn-transition'
                            outline
                            color='success'
                          >
                            <FontAwesomeIcon icon={faCheck} />
                          </Button>
                        </div>
                        <div className='widget-content-right ml-3'>
                          <div className='badge badge-pill badge-success'>
                            New
                          </div>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className='todo-indicator bg-info' />
                    <div className='widget-content p-0'>
                      <div className='widget-content-wrapper'>
                        <div className='widget-content-left mr-2'>
                          <CustomInput
                            type='checkbox'
                            id='exampleCustomCheckbox2'
                            label='&nbsp;'
                          />
                        </div>
                        <div className='widget-content-left mr-3'>
                          <div className='widget-content-left'>
                            <img
                              width={42}
                              className='rounded'
                              src={avatar2}
                              alt=''
                            />
                          </div>
                        </div>
                        <div className='widget-content-left'>
                          <div className='widget-heading'>
                            Stackeholder meeting
                          </div>
                          <div className='widget-subheading'>
                            A short description here
                          </div>
                        </div>
                        <div className='widget-content-right widget-content-actions'>
                          <Button
                            className='border-0 btn-transition'
                            outline
                            color='success'
                          >
                            <FontAwesomeIcon icon={faCheck} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className='todo-indicator bg-success' />
                    <div className='widget-content p-0'>
                      <div className='widget-content-wrapper'>
                        <div className='widget-content-left mr-2'>
                          <CustomInput
                            type='checkbox'
                            id='exampleCustomCheckbox3'
                            label='&nbsp;'
                          />
                        </div>
                        <div className='widget-content-left flex2'>
                          <div className='widget-heading'>Development Task</div>
                          <div className='widget-subheading'>
                            Finish React ToDo List App
                          </div>
                        </div>
                        <div className='widget-content-right'>
                          <Button
                            className='border-0 btn-transition'
                            outline
                            color='success'
                          >
                            <FontAwesomeIcon icon={faCheck} />
                          </Button>
                          <Button
                            className='border-0 btn-transition'
                            outline
                            color='danger'
                          >
                            <FontAwesomeIcon icon={faTrashAlt} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className='todo-indicator bg-warning' />
                    <div className='widget-content p-0'>
                      <div className='widget-content-wrapper'>
                        <div className='widget-content-left mr-2'>
                          <CustomInput
                            type='checkbox'
                            id='exampleCustomCheckbox12'
                            label='&nbsp;'
                          />
                        </div>
                        <div className='widget-content-left'>
                          <div className='widget-heading'>
                            Marketing informational Video
                            <div className='badge badge-danger ml-2'>
                              Rejected
                            </div>
                          </div>
                          <div className='widget-subheading'>
                            <i>Written by Bob</i>
                          </div>
                        </div>
                        <div className='widget-content-right widget-content-actions'>
                          <Button
                            className='border-0 btn-transition'
                            outline
                            color='success'
                          >
                            <FontAwesomeIcon icon={faCheck} />
                          </Button>
                          <Button
                            className='border-0 btn-transition'
                            outline
                            color='danger'
                          >
                            <FontAwesomeIcon icon={faTrashAlt} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className='todo-indicator bg-focus' />
                    <div className='widget-content p-0'>
                      <div className='widget-content-wrapper'>
                        <div className='widget-content-left mr-2'>
                          <CustomInput
                            type='checkbox'
                            id='exampleCustomCheckbox1'
                            label='&nbsp;'
                          />
                        </div>
                        <div className='widget-content-left'>
                          <div className='widget-heading'>
                            Task with hover dropdown menu
                          </div>
                          <div className='widget-subheading'>
                            <div>
                              By Johnny
                              <div className='badge badge-pill badge-info ml-2'>
                                NEW
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='widget-content-right widget-content-actions'>
                          <Dropdown
                            className='d-inline-block rm-pointers'
                            // onMouseOver={this.onMouseEnter}
                            // onMouseLeave={this.onMouseLeave}
                            // isOpen={this.state.dropdownOpen}
                            // toggle={this.toggle}
                          >
                            <DropdownToggle
                              color='link'
                              className='border-0 btn-transition'
                            >
                              <FontAwesomeIcon icon={faEllipsisH} />
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem header>Header</DropdownItem>
                              <DropdownItem disabled>Action</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className='todo-indicator bg-primary' />
                    <div className='widget-content p-0'>
                      <div className='widget-content-wrapper'>
                        <div className='widget-content-left mr-2'>
                          <CustomInput
                            type='checkbox'
                            id='exampleCustomCheckbox4'
                            label='&nbsp;'
                          />
                        </div>
                        <div className='widget-content-left flex2'>
                          <div className='widget-heading'>
                            Daily Standup Meeting
                          </div>
                          <div className='widget-subheading'>
                            This task has show on hover actions!
                          </div>
                        </div>
                        <div className='widget-content-right widget-content-actions'>
                          <Button
                            className='border-0 btn-transition'
                            outline
                            color='success'
                          >
                            <FontAwesomeIcon icon={faCheck} />
                          </Button>
                        </div>
                        <div className='widget-content-right ml-3'>
                          <div className='badge badge-pill badge-dark'>NEW</div>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className='todo-indicator bg-info' />
                    <div className='widget-content p-0'>
                      <div className='widget-content-wrapper'>
                        <div className='widget-content-left mr-2'>
                          <CustomInput
                            type='checkbox'
                            id='exampleCustomCheckbox2'
                            label='&nbsp;'
                          />
                        </div>
                        <div className='widget-content-left mr-3'>
                          <div className='widget-content-left'>
                            <img
                              width={42}
                              className='rounded'
                              src={avatar2}
                              alt=''
                            />
                          </div>
                        </div>
                        <div className='widget-content-left'>
                          <div className='widget-heading'>SCRUM</div>
                          <div className='widget-subheading'>
                            Description here...
                          </div>
                        </div>
                        <div className='widget-content-right widget-content-actions'>
                          <Button
                            className='border-0 btn-transition'
                            outline
                            color='danger'
                          >
                            <FontAwesomeIcon icon={faTrashAlt} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </PerfectScrollbar>
          </div>
          <CardFooter className='d-block text-right'>
            <Button size='sm' className='mr-2' color='link'>
              Cancel
            </Button>
            <Button color='info'>Add Task</Button>
          </CardFooter>
        </Card>
      </Col>
    </Fragment>
  );
};

export default TaskList;
