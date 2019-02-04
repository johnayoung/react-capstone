import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CardContent from '../components/CardContent';
import { connect } from 'react-redux';

export class CardContainer extends Component {
  render() {
    const cards = this.props.endpoints.map(endpoint => {
        return (
          <li key={endpoint.id}>
            <Link to={`/endpoint/${endpoint.name}`}>            
              <CardContent 
                cardName={endpoint.name}
                cardImage='logo'
                cardDescription={endpoint.description} 
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
    endpoints: state.endpoints.endpoints
  }
}

export default connect(mapStateToProps)(CardContainer);