import React from "react";

function FieldError(props) {
  return <p className="text-red text-xs italic">{props.error}</p>;
}

export default FieldError;
