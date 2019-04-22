import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { API_URL } from '../config';

export default class OAuth extends Component {
  state = {
    user: {},
    disabled: ''
  };

  componentDidMount() {
    // const { socket, provider } = this.props;
  }

  render() {
    const { name, photo } = this.state.user;
    const { provider, socket } = this.props;
    const { disabled } = this.state;
    const atSymbol = provider === 'twitter' ? '@' : '';

    return (
      <div>
        {name ? (
          <div className="login-card">
            <img src={photo} alt={name} className="login-img" />
            <FontAwesome name="times-circle" className="login-close" onClick={this.closeCard} />
            <h4 className="login-header">{`${atSymbol}${name}`}</h4>
          </div>
        ) : (
          <div className="button-wrapper fadein-fast">
            <button
              type="button"
              className={`${provider} ${disabled} button login-button text-white font-bold py-2 px-4 text-2xl`}
            >
              <a className="login-link" href={`${API_URL}/auth/${provider}`}>
                {' '}
                <FontAwesomeIcon icon={['fab', provider]} className="mr-4" />
                Login with Google
              </a>
            </button>
          </div>
        )}
      </div>
    );
  }
}

// OAuth.propTypes = {
//   provider: PropTypes.string.isRequired,
//   socket: PropTypes.object.isRequired
// };
