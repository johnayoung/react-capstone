import React, { Component } from 'react'

export default class Error extends Component {
  render() {
    const {error} = this.props;
    return (
        <div class="bg-red-lightest border-l-4 border-red text-red-dark p-2" role="alert">
            {/* <p class="font-bold">Be Warned</p> */}
            <p>{error}</p>
        </div>
    )
  }
}
