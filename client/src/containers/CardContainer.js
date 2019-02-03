import React, { Component } from 'react'
import CardContent from '../components/CardContent';
import { connect } from 'mongoose';

export class CardContainer extends Component {
  render() {
    const cards = this.props.cardList.map(card => {
        return (
            <CardContent 
                cardName={card.name}
                cardImage='logo'
                cardDescription={card.description} 
            />
        )
    })
    return (
      <div className='cardList'>
        {cards}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        cardList: state.endpoints
    };
};

export default connect(mapStateToProps)(CardContainer);