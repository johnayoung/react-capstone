import React, { Component } from 'react'
import Icon from './icons/Index';

export default class CardContent extends Component {
  render() {
    return (   
        <div className=''>        
            <div className='flex flex-row items-center'>
                <div className='cardContentMiddle'>
                    <Icon name={this.props.cardImage} width={30}/>
                    {/* <img src={this.props.cardImage} alt={this.props.cardName}/> */}
                </div>
                <div className='flex-1 p-2'>
                    <span className='font-bold text-xl'>{this.props.cardName}</span>
                    <p className='cardContentDescription'>{this.props.cardDescription}</p>
                </div>
            </div>
        </div>
    )
  }
}
