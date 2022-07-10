import React from "react";

export default function Summarylist(props){


console.log(props.props.productid.name)
    return(
    <div style={{display:"block"}} >
    <h4 style={{display:"inline"}} >{props.props.productid.name}</h4>
    <h4 style={{display:"inline"}} >X</h4>
    <h5 style={{display:"inline"}} >{props.props.quantity}</h5>
    </div>)
}