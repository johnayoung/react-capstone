import hljs from'highlight.js/lib/highlight';
import React from'react';

class Code extends React.Component {
  // componentDidMount() {
  //   this.highlightCode();
  // }

  // componentDidUpdate() {
  //   this.highlightCode();
  //   this.highlightCode(this.props.fetchedEndpoint);
  // }

  highlightCode(code) {
  const highlighter = hljs.highlightAuto(JSON.stringify(code))
  return highlighter.value
  }

  render() {
    return (
      <pre>
        <code>{(!this.props.fetchedEndpoint) ? 'Hit send' : this.highlightCode()}</code>
      </pre>
    )}
}

export default Code;