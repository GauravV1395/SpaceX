import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import "./DisplayCardContent.css";

const DisplayCardContent = (props) => {
  return (
    <div>
      <label>
        <h3 className="content-title">
          <strong>{props.firstLabel}</strong>
        </h3>
      </label>
      <p className="content-descrp">{props.title}</p>
      <label>
        <h3 className="content-title">
          <strong>{props.secondLabel}</strong>
        </h3>
      </label>
      <p className="content-descrp">
        {props.index === 0
          ? moment(props.event_date_utc).format("DD/MM/YYYY")
          : props.event_date_utc}
      </p>
      <label>
        <h3 className="content-title">
          <strong>{props.thirdLabel}</strong>
        </h3>
      </label>
      <p className="content-descrp">{props.flight_number}</p>
      <label>
        <h3 className="content-title">
          <strong>{props.fourthLabel}</strong>
        </h3>
      </label>
      <p className="content-descrp">{props.details}</p>
      <label>
        <h3 className="content-title">
          <strong>{props.fifthLabel}</strong>
        </h3>
      </label>
      <p className="content-descrp">
        {props.index === 0 ? (
          <Link target="_blank">{props.article}</Link>
        ) : (
          <p className="content-descrp">{props.article}</p>
        )}
      </p>
      <label>
        <h3 className="content-title">
          <strong>{props.sixthLabel}</strong>
        </h3>
      </label>
      <p className="content-descrp">
        {props.index === 0 ? (
          <Link target="_blank">{props.wikipedia}</Link>
        ) : (
          <p className="content-descrp">{props.wikipedia}</p>
        )}
      </p>
    </div>
  );
};

export default DisplayCardContent;
