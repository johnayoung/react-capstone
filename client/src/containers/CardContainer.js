import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CardContent from '../components/CardContent';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import { connect } from 'react-redux';

export class CardContainer extends Component {
  render() {
    const {searchBox} = this.props;
    console.log('search box values are ', searchBox)
    const cards = this.props.endpoints.filter(endpoint => {
      return (!searchBox) ? endpoint : endpoint.name.toLowerCase().includes(searchBox)
    }).map(endpoint => {
      const {id, userId, name, description} = endpoint;
      const username = userId.username;
        return (
          <li key={id} className=' bg-white w-full p-4 border-t hover:bg-grey-lighter text-grey-darker'>
            <Link to={`/${username}/${name}`} className='hover:bg-grey-lighter no-underline text-grey-darker'>          
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
        <form className='p-6'>
          <h1 className='text-center font-semibold tracking-tight mb-1'>API Hub</h1>
          <div className='max-w-sm mx-auto text-center text-grey-dark mb-16'>
            <p className='leading-tight'>An easy way to find and connect to (a few) APIs</p>
          </div>
          <Field 
            name='searchBox'
            component='input'
            type='text'
            onChange={this.props.handleChange}
            placeholder='Search thousands of API endpoints'
            className='transition focus:outline-0 border border-transparent focus:bg-white focus:border-grey-light placeholder-grey-darkest rounded bg-grey-lighter py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input'
          />
        </form>
        <ul className='list-reset flex flex-row flex-wrap ml-4 mr-4'>
          {cards}
        </ul>
      </div>
    )
  }
}

CardContainer = reduxForm({
  form: 'liveSearch', // a unique identifier for this form
  // onSubmit: (values, dispatch) => dispatch(postEndpoint(values)),
  onSubmit: (values, dispatch) => console.log(values),
  onChange: (values, dispatch) => console.log(values)
})(CardContainer)

const selector = formValueSelector('liveSearch')

function mapStateToProps(state) {
  const searchBox = selector(state, 'searchBox')
  return {
    endpoints: state.endpoints.endpoints,
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null,
    searchBox
  }
}

export default connect(mapStateToProps)(CardContainer);