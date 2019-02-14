import React from "react";

const SVG = props => {
  const fills = {
    viewBox: "0 0 24 24"
  };
  return (
    <svg viewBox={fills.viewBox} {...props}>
      <path
        className="secondary"
        fillRule="evenodd"
        d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
      />
    </svg>
  );
};

export default SVG;