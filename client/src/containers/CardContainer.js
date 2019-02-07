import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CardContent from '../components/CardContent';
import { connect } from 'react-redux';

export class CardContainer extends Component {
  render() {
    const cards = this.props.endpoints.map(endpoint => {
      const {id, userId, name, description} = endpoint;
      const username = userId.username;
        return (
          <li key={id}>
            <Link to={`/${username}/${name}`}>            
              <CardContent 
                cardName={name}
                cardImage='logo'
                cardDescription={description} 
              />
            </Link>
          </li>
        )
    });
    return (
      <div className='cardList'>
        <ul>
          {cards}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    endpoints: state.endpoints.endpoints,
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null,
  }
}

export default connect(mapStateToProps)(CardContainer);