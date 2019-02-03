import React, { Component } from 'react'
import Icon from './icons/Index';

export default class CardContent extends Component {
  render() {
    return (   
        <div className='container cardContainer'>        
            <div className='cardContent'>
                <div className='cardContentTop'>
                    <span>{this.props.cardName}</span>
                </div>
                <div className='cardContentMiddle'>
                    <Icon name={this.props.cardImage} width={30}/>
                </div>
                <div className='cardContentBottom'>
                    <p className='cardContentDescription'>{this.props.cardDescription}</p>
                </div>
            </div>
        </div>
    )
  }
}
