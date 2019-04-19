import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { API_URL } from '../config';

// let dialog;

// function messageHandler(arg) {
//   dialog.close();
//   console.log(arg.message);
// }

// function eventHandler(arg) {
//   // In addition to general system errors, there are 2 specific errors
//   // and one event that you can handle individually.
//   switch (arg.error) {
//     case 12002:
//       console.log('Cannot load URL, no such page or bad URL syntax.');
//       break;
//     case 12003:
//       console.log('HTTPS is required.');
//       break;
//     case 12006:
//       // The dialog was closed, typically because the user the pressed X button.
//       console.log('Dialog closed by user');
//       break;
//     default:
//       console.log('Undefined error in dialog window');
//       break;
//   }
// }

// function dialogCallback(asyncResult) {
//   if (asyncResult.status == 'failed') {
//     // In addition to general system errors, there are 3 specific errors for
//     // displayDialogAsync that you can handle individually.
//     switch (asyncResult.error.code) {
//       case 12004:
//         console.log('Domain is not trusted');
//         break;
//       case 12005:
//         console.log('HTTPS is required');
//         break;
//       case 12007:
//         console.log('A dialog is already opened.');
//         break;
//       default:
//         console.log(asyncResult.error.message);
//         break;
//     }
//   } else {
//     dialog = asyncResult.value;
//     /* Messages are sent by developers programatically from the dialog using office.context.ui.messageParent(...) */
//     dialog.addEventHandler(window.Office.EventType.DialogMessageReceived, messageHandler);

//     /* Events are sent by the platform in response to user actions or errors. For example, the dialog is closed via the 'x' button */
//     dialog.addEventHandler(window.Office.EventType.DialogEventReceived, eventHandler);
//   }
// }

export default class OAuth extends Component {
  state = {
    user: {},
    disabled: ''
  };

  componentDidMount() {
    const { socket, provider } = this.props;

    socket.on(provider, user => {
      // this.popup.close();
      this.setState({ user });
    });
  }

  checkPopup() {
    const check = setInterval(() => {
      const { popup } = this;
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check);
        this.setState({ disabled: '' });
      }
    }, 1000);
  }

  openPopup() {
    const { provider, socket } = this.props;
    const width = 600;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const url = `${API_URL}/${provider}?socketId=${socket.id}`;

    return window.open(
      url,
      '',
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
    );
  }

  startAuth = () => {
    if (!this.state.disabled) {
      this.popup = this.openPopup();
      this.checkPopup();
      this.setState({ disabled: 'disabled' });
    }
  };

  closeCard = () => {
    this.setState({ user: {} });
  };

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
            {/* <button
              type="button"
              // onClick={this.startAuth}
              onClick={this.startDialogAuth}
              className={`${provider} ${disabled} button login-button text-white font-bold py-2 px-4 text-2xl`}
            >
              <FontAwesomeIcon icon={['fab', provider]} className="mr-4" />
              Login with Google
            </button> */}
            <a href={`${API_URL}/${provider}?socketId=${socket.id}`}>
              {' '}
              <FontAwesomeIcon icon={['fab', provider]} className="mr-4" />
              Login with Google
            </a>
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
