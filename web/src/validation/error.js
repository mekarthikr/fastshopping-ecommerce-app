import React from "react";


export default function FormError(props) {
    if (props.isHidden) {return null;}
    return (
      <div className="form-warning">
          {props.errorMessage}
      </div>
    )
  }