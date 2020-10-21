import React, { Fragment } from 'react';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { faHome } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BreadCrumb = (props) => {
  return (
    <Fragment>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href='https://colorlib.com/' onClick={(e) => e.preventDefault()}>
            <FontAwesomeIcon icon={faHome} />
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href='https://colorlib.com/' onClick={(e) => e.preventDefault()}>
            Dashboards
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem active>{props.Title}</BreadcrumbItem>
      </Breadcrumb>
    </Fragment>
  );
};

export default BreadCrumb;
