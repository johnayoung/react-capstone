import React from 'react';
import setData from '../excel/index';

function OfficeButton(props) {
  let ready;
  let content = <div>loading</div>;
  window.Office.onReady(() => {
    ready = true;
  });
  if (ready) {
    content = (
      <button className="btn bg-red text-white" onClick={() => setData()}>
        Ready
      </button>
    );
  }
  return <div>{content}</div>;
}

export default OfficeButton;
