import React from 'react'
import { Field, FieldArray } from 'redux-form'
import RenderField from '../components/RenderField'
import RenderParameters from '../components/RenderParameters'

const RenderEndpoints = ({ fields, meta: { error, submitFailed } }) => (
  <ul className='list-reset'>
    <li>
      <button 
        className='bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex mb-4'
        type="button" 
        onClick={() => fields.push({})}>
        <svg className='icon-add fill-current w-4 h-4 mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="secondary" fill-rule="evenodd" d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"/></svg>
        Add Endpoint
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((endpoint, index) => (
      <li className='mb-4' key={index}>
        <button
          className='bg-red-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex'
          type="button"
          title="Remove Endpoint"
          onClick={() => fields.remove(index)}
        >
        <svg className='icon-close fill-current w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="secondary" fill-rule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/></svg>
        </button>
        <h4>Endpoint #{index + 1}</h4>
        <div className='mb-4'>
          <Field
            name={`${endpoint}.name`}
            type="text"
            component={RenderField}
            label="Name"
          />
        </div>
        <div className='mb-4'>
          <Field
            name={`${endpoint}.fullUrl`}
            type='url'
            component={RenderField}
            label="Full Url"
            placeholder='https://...'
          />
        </div>
        <FieldArray name={`${endpoint}.parameters`} component={RenderParameters} />
      </li>
    ))}
  </ul>
)

export default RenderEndpoints;