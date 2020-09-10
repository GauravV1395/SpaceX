import React from "react";
import "./card.css";

import { Card, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";

const SpaceCard = (props) => {
  return (
    <div body onClick={props.onClick} className="card-blk">
      <div className="card-sub-blk">
        <p className="card-sub-blk-text">{props.title}</p>
      </div>
    </div>
  );
};

export default SpaceCard;
