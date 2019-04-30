import React from 'react';
import Icon from './icons/Index';

export default function CardContent(props) {
  const { cardImage, cardName, cardDescription } = props;
  return (
    <div className="">
      <div className="flex flex-row items-center">
        <div className="cardContentMiddle">
          <Icon name={cardImage} width={30} />
          {/* <img src={this.props.cardImage} alt={this.props.cardName} /> */}
        </div>
        <div className="flex-1 p-2">
          <span className="font-bold text-xl">{cardName}</span>
          <p className="cardContentDescription">{cardDescription}</p>
        </div>
      </div>
    </div>
  );
}
