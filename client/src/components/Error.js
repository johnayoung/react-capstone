import React, { Component } from 'react';

export default class Error extends Component {
  render() {
    const { error } = this.props;
    return (
      <div className="bg-red-lightest border-l-4 border-red text-red-dark p-2" role="alert">
        <p>{error}</p>
      </div>
    );
  }
}
