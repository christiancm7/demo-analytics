import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import BreadCrumb from '../../UI/BreadCrumb';

class PageTitleAlt3 extends Component {
  randomize(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
  }

  render() {
    let {
      enablePageTitleIcon,
      enablePageTitleSubheading,
      heading,
      icon,
      breadcrumbTitle,
    } = this.props;

    return (
      <Fragment>
        <div className='app-page-title app-page-title-simple'>
          <div className='page-title-wrapper'>
            <div className='page-title-heading'>
              <div>
                <div className='page-title-head center-elem'>
                  <span
                    className={cx('d-inline-block pr-2', {
                      'd-none': !enablePageTitleIcon,
                    })}
                  >
                    <i className={icon} />
                  </span>
                  <span className='d-inline-block'>{heading}</span>
                </div>
                <div
                  className={cx('page-title-subheading opacity-10', {
                    'd-none': !enablePageTitleSubheading,
                  })}
                >
                  <BreadCrumb Title={breadcrumbTitle} />
                </div>
              </div>
            </div>
            <div className='page-title-actions'></div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
  enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitleAlt3);
