import React from 'react';
import Highlight from 'react-highlight';
import { connect } from 'react-redux';
// import 'highlight.js/styles/googlecode.css';
import 'highlight.js/styles/github.css';

const Code = props => {
  const { userEndpoint, loadingUserEndpoint } = props;
  const logic = loadingUserEndpoint
    ? 'Just a moment...'
    : !userEndpoint
    ? 'Pulled JSON will appear here'
    : JSON.stringify(userEndpoint, null, 2);
  return (
    <div className="container m-2 text-xs">
      <Highlight className="json">{logic}</Highlight>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userEndpoint: state.endpoints.userEndpoint,
    loadingUserEndpoint: state.endpoints.loadingUserEndpoint
  };
}

export default connect(mapStateToProps)(Code);
