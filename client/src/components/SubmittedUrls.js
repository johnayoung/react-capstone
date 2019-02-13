import React from "react";

function SubmittedUrls(props) {
  const { newUrls } = props;
  const displayedUrls = newUrls.map(url => (
    <a href={url}>
      <p>{url}</p>
    </a>
  ));
  return (
    <div
      className="bg-green-lightest border-l-4 border-green text-green-dark p-4 mt-4"
      role="alert"
    >
      <p className="font-bold">Success! Your URLs:</p>
      {displayedUrls}
    </div>
  );
}

export default SubmittedUrls;
