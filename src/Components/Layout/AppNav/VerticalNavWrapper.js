import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MetisMenu from 'react-metismenu';
import { setEnableMobileMenu } from '../../../reducers/ThemeOptions';
import {
  HomeNav,
  PatientsNav,
  BillingNav,
  AnalyticsNav,
  AdminNav,
} from './NavItems';

class Nav extends Component {
  state = {};

  toggleMobileSidebar = () => {
    let { enableMobileMenu, setEnableMobileMenu } = this.props;
    setEnableMobileMenu(!enableMobileMenu);
  };

  render() {
    return (
      <Fragment>
        <h5 className='app-sidebar__heading'>Home</h5>
        <MetisMenu
          content={HomeNav}
          onSelected={this.toggleMobileSidebar}
          activeLinkFromLocation
          className='vertical-nav-menu'
          iconNamePrefix=''
          classNameStateIcon='pe-7s-angle-down'
        />

        <h5 className='app-sidebar__heading'>Patients</h5>
        <MetisMenu
          content={PatientsNav}
          onSelected={this.toggleMobileSidebar}
          activeLinkFromLocation
          className='vertical-nav-menu'
          iconNamePrefix=''
          classNameStateIcon='pe-7s-angle-down'
        />

        <h5 className='app-sidebar__heading'>Billing</h5>
        <MetisMenu
          content={BillingNav}
          onSelected={this.toggleMobileSidebar}
          activeLinkFromLocation
          className='vertical-nav-menu'
          iconNamePrefix=''
          classNameStateIcon='pe-7s-angle-down'
        />

        <h5 className='app-sidebar__heading'>Analytics</h5>
        <MetisMenu
          content={AnalyticsNav}
          onSelected={this.toggleMobileSidebar}
          activeLinkFromLocation
          className='vertical-nav-menu'
          iconNamePrefix=''
          classNameStateIcon='pe-7s-angle-down'
        />

        <h5 className='app-sidebar__heading'>Settings</h5>
        <MetisMenu
          content={AdminNav}
          onSelected={this.toggleMobileSidebar}
          activeLinkFromLocation
          className='vertical-nav-menu'
          iconNamePrefix=''
          classNameStateIcon='pe-7s-angle-down'
        />
      </Fragment>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}
const mapStateToProps = (state) => ({
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));
