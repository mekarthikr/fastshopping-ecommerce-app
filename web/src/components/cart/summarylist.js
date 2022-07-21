import React from "react";

export default function Summarylist(props) {
  console.log(props.props.productid.name);
  return (
    <div className="d-block">
      <h4 className="d-inline">{props.props.productid.name}</h4>
      <h4 className="d-inline">X</h4>
      <h5 className="d-inline">{props.props.quantity}</h5>
    </div>
  );
}
