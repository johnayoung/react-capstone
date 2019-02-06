import hljs from'highlight.js/lib/highlight';
import React from'react';

class Code extends React.Component {

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