import hljs from'highlight.js/lib/highlight';
import React from'react';

class Code extends React.Component {
  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    const json = {
      "method": "GET",
      "name": "test name",
      "description": "An endpoint from iextrading.com",
      "fullUrl": "https://api.iextrading.com/1.0/stock/aapl/chart/5y?chartReset=true",
      "favicon": "https://api.faviconkit.com/iextrading.com/144",
      "tld": "com",
      "domain": "iextrading.com",
      "hostname": "api.iextrading.com",
      "sub": "api",
      "protocol": "https",
      "path": "/1.0/stock/aapl/chart/5y",
      "query": "chartReset=true",
      "queryObj": {
          "chartReset": "true"
      },
      "createdAt": "2019-02-04T14:54:13.233Z",
      "updatedAt": "2019-02-04T14:54:13.233Z",
      "id": "5c585215d3c1fa4d6cc69124"
  }
  const highlighter = hljs.highlightAuto(JSON.stringify(json))
  return highlighter.value
  }

  render() {
    const json = {
      "method": "GET",
      "name": "test name",
      "description": "An endpoint from iextrading.com",
      "fullUrl": "https://api.iextrading.com/1.0/stock/aapl/chart/5y?chartReset=true",
      "favicon": "https://api.faviconkit.com/iextrading.com/144",
      "tld": "com",
      "domain": "iextrading.com",
      "hostname": "api.iextrading.com",
      "sub": "api",
      "protocol": "https",
      "path": "/1.0/stock/aapl/chart/5y",
      "query": "chartReset=true",
      "queryObj": {
          "chartReset": "true"
      },
      "createdAt": "2019-02-04T14:54:13.233Z",
      "updatedAt": "2019-02-04T14:54:13.233Z",
      "id": "5c585215d3c1fa4d6cc69124"
  }
    return (
      <pre>
        <code>{JSON.stringify(json, null, 2)}</code>
      </pre>
    )}
}

export default Code;