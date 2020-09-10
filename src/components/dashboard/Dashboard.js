import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";

import SpaceCard from "../card/Card";
import MainHeader from "../mainheader/MainHeader";

import { setLink } from "./../../actions";
import { setItem } from "../../utils/LocalStorageHelpers";

const Dashboard = (props) => {
  useEffect(() => {
    setItem("link", [{ name: "Dashboard", link: "/dashboard" }]);
    props.setLink([{ name: "Dashboard", link: "/dashboard" }]);
  }, []);
  return (
    <>
      <MainHeader text="Welcome to SpaceX" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Row>
          <Col sm="6">
            <summary>
              <SpaceCard
                title="Payloads"
                subtitle="List Of Payloads"
                text="Checkout our exciting list of payloads"
                className="w-100 h-100"
                onClick={() => props.history.push("/payload_list")}
              />
            </summary>
          </Col>
          <Col sm="6">
            <summary>
              <SpaceCard
                title="History"
                subtitle="History of Payloads"
                text="Checkout the history of payloads"
                className="w-100 h-200"
                onClick={() => props.history.push("/history_list")}
              />
            </summary>
          </Col>
        </Row>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    link: state.link.link,
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   setLink: (link) => dispatch(setLink(link)),
// });

export default connect(mapStateToProps, { setLink })(Dashboard);
