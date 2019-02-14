import React from "react";
import Error from "../components/Error";

function FetchEndpointsError(props) {
  return (
    <div className="mt-20 container mx-auto">
      <Error error={props.error} />
      <div className="flex flex-col items-center my-20">
        <h2 className="mb-6">Why did this happen?</h2>
        <p>Sometimes pulling the endpoints will error out.</p>
        <p>Usually reloading the page will fix the issue.</p>
      </div>
    </div>
  );
}

export default FetchEndpointsError;
