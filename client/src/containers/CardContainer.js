import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CardContent from '../components/CardContent';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import { connect } from 'react-redux';
import RenderField from '../components/RenderField';

export class CardContainer extends Component {
  render() {
    const {searchBox} = this.props;
    console.log('search box values are ', searchBox)
    const cards = this.props.endpoints.filter(endpoint => {
      return (!searchBox) ? endpoint : endpoint.name.toLowerCase().includes(searchBox)
    }).map(endpoint => {
      const {id, userId, name, description, favicon} = endpoint;
      const username = userId.username;
        return (
          <li key={id} className='w-full p-4 border-t hover:bg-grey-lighter text-grey-darker'>
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
      <div className='cardList bg-white'>
        <form className='p-6'>
          {/* <h4>Discover and connect to thousands of API endpoints</h4> */}
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