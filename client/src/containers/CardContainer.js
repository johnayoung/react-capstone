import React, { Component } from 'react'
import CardContent from '../components/CardContent';
import { connect } from 'react-redux';

export class CardContainer extends Component {
  render() {
    const cards = this.props.endpoints.map(endpoint => {
        return (
            <CardContent 
            cardName={endpoint.name}
            cardImage='logo'
            cardDescription={endpoint.description} 
        />
        )
    });
    return (
      <div className='cardList'>
        {cards}
      </div>
    )
  }
}

export default connect()(CardContainer);