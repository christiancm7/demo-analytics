import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import HeaderRightDrawer from '../../../../Layout/AppHeader/Components/HeaderRightDrawer';

class PageTitle extends React.Component {
  state = {
    expZoomIn: false,
  };

  toggle(name) {
    this.setState({
      [name]: !this.state[name],
      progress: 0.5,
    });
  }

  render() {
    let {
      enablePageTitleIcon,
      enablePageTitleSubheading,

      heading,
      icon,
      subheading,
    } = this.props;
    return (
      <div className='app-page-title'>
        <div className='page-title-wrapper'>
          <div className='page-title-heading'>
            <div
              className={cx('page-title-icon', {
                'd-none': !enablePageTitleIcon,
              })}
            >
              <i className={icon} />
            </div>
            <div>
              {heading}
              <div
                className={cx('page-title-subheading', {
                  'd-none': !enablePageTitleSubheading,
                })}
              >
                {subheading}
              </div>
            </div>
          </div>
          <div className='page-title-actions'>
            <HeaderRightDrawer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
  enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);
