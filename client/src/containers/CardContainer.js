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
        <form>
          <h4>Discover and connect to thousands of API endpoints</h4>
          <Field 
            name='searchBox'
            component='input'
            type='text'
            onChange={this.props.handleChange}
            placeholder='Search API endpoints'
          />
        </form>
        <ul>
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