import React, { Fragment } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import SearchBox from '../../../../Layout/AppHeader/Components/SearchBox' 

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      data: '',
    };
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
                <SearchBox />
                
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
