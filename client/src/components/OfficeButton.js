import React from 'react';
import placeData from '../excel/index';

function OfficeButton(props) {
  let ready;
  let content = <div>loading</div>;
  window.Office.onReady(() => {
    ready = true;
  });
  if (ready) {
    content = (
      <button className="btn bg-red text-white" onClick={() => placeData()}>
        Ready
      </button>
    );
  }
  return <div>{content}</div>;
}

export default OfficeButton;
