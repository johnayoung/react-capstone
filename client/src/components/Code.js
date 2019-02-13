import React from "react";
import Highlight from "react-highlight";
import { connect } from "react-redux";
// import 'highlight.js/styles/googlecode.css';
import "highlight.js/styles/github.css";

class Code extends React.Component {
  render() {
    return (
      <div className="container m-2 text-s">
        <Highlight className="json">
          {!this.props.userEndpoint
            ? "Pull JSON will appear here"
            : JSON.stringify(this.props.userEndpoint, null, 2)}
        </Highlight>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userEndpoint: state.endpoints.userEndpoint
  };
}

export default connect(mapStateToProps)(Code);
