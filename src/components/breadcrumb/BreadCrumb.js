import React, { useState, useEffect } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./BreadCrumb.css";

const NavBarItems = (props) => {
  const [link, setLink] = useState([]);

  useEffect(() => {
    if (props.link) {
      setLink(props.link);
    }
  }, [props.link]);

  return (
    <div>
      <Breadcrumb tag="nav" listTag="div">
        {link.map((link) => {
          return (
            <BreadcrumbItem>
              <Link to={link.link}>{link.name}</Link>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    link: state.link.link,
  };
};

export default connect(mapStateToProps)(NavBarItems);
