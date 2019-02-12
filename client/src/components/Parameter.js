import React, { Component } from 'react'
import RenderField from './RenderField';
import {Field} from 'redux-form';
import get from '../utils/nestedValueGetter';
import stringToPath from '../utils/stringToPath';

class Parameter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        }
    }
    hideModal() {
        this.setState({
            isVisible: false
        })
    }

    showModal() {
        this.setState({
            isVisible: true
        })
    }
  render() {
    const {parameter, index, fields, formValues} = this.props;
    const table = get(stringToPath(parameter), formValues);
    console.log(table);
    return (
        <div className=''>
            <div className='flex flex-row items-center border-t border-b hover:bg-grey-lightest'>
                <div className='flex-1 p-2 text-xs min-w-0'>
                    <table className='truncate w-full table-fixed'>
                        <tr className='truncate'>
                            <td className='max-w-xs w-1/3 truncate'>{table.name}</td>
                            <td className='max-w-xs w-1/3 truncate'>{table.value}</td>
                            <td className='max-w-xs w-1/3 truncate'>{table.required}</td>
                        </tr>
                    </table>
                </div>
                <div class="p-2 whitespace-no-wrap">
                    <button
                        className='inline-block ml-2 bg-grey-lighter hover:bg-grey text-grey-darkest font-bold py-2 px-4'
                        type="button"
                        title="Remove Parameter"
                        onClick={() => fields.remove(index)}>
                        <svg className='fill-current text-blue icon-trash h-4 w-4'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="primary" d="M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"/><path class="secondary" d="M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"/></svg>
                    </button>
                    <button 
                        onClick={() => this.showModal()}
                        className="inline-block ml-2 bg-grey-lighter hover:bg-grey text-grey-darkest font-bold py-2 px-4">
                        <svg className="icon-edit fill-current text-blue h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="primary" d="M4 14a1 1 0 0 1 .3-.7l11-11a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-11 11a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-3z"/><rect width="20" height="2" x="2" y="20" class="secondary" rx="1"/></svg>
                    </button>
                </div>
            </div>
            <div className={!(this.state.isVisible) ? 'hidden' : 'flex h-screen mx-auto justify-center align-center'}>
                <li className={'fixed pin-t bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-16'} key={index}>
                <div className='mb-4'> 
                    <Field
                    name={`${parameter}.name`}
                    type="text"
                    component={RenderField}
                    label={`Name`}
                    />
                </div>
                {/* <div className='mb-4'> 
                    <Field
                    name={`${parameter}.type`}
                    type="text"
                    component={RenderField}
                    label={`Parameter #${index + 1}: Type`}
                    props={{options: ['', 'input', 'list']}}
                    />
                </div> */}
                <div className='mb-4'> 
                    <Field
                    name={`${parameter}.value`}
                    type="text"
                    component={RenderField}
                    label={`Initial Value`}
                    />
                </div>
                <div className='mb-4'> 
                    <Field
                    name={`${parameter}.required`}
                    type="select"
                    component={RenderField}
                    label={`Required`}
                    props={{options: ['Yes', 'No']}}
                    />
                </div>
                <button
                    className='ml-2 bg-grey-lighter hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex'
                    type="button"
                    title="Remove Parameter"
                    onClick={() => fields.remove(index)}>
                    <svg className='fill-current text-blue icon-trash h-4 w-4'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="primary" d="M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"/><path class="secondary" d="M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"/></svg>
                </button>
                <button
                    className='ml-2 bg-grey-lighter hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex'
                    type="button"
                    title="Save Parameter"
                    onClick={() => this.hideModal()}>
                    Save Parameter
                </button>
                </li>
            </div>
        </div>
    )
  }
}

export default Parameter;