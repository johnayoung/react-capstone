import React, { Component } from 'react';
import { Field } from 'redux-form';
import RenderField from './RenderField';
import get from '../utils/nestedValueGetter';
import stringToPath from '../utils/stringToPath';
import Toggle from './Toggle';

class Parameter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      checked: false
    };
  }

  hideModal() {
    this.setState({
      isVisible: false
    });
  }

  showModal() {
    this.setState({
      isVisible: true
    });
  }

  handleToggle() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const { parameter, index, fields, formValues } = this.props;
    const table = get(stringToPath(parameter), formValues);
    const schema = (
      <div className="mb-4">
        <Field
          name={`${parameter}.schema.enum`}
          type="text"
          component={RenderField}
          label="Schema"
          props={{ textarea: true }}
          placeholder="One value per line"
        />
      </div>
    );
    return (
      <div className="">
        <div className="flex flex-row items-center border-t border-b hover:bg-grey-lightest">
          <div className="flex-1 p-2 text-xs min-w-0">
            <table className="truncate w-full table-fixed">
              <tbody>
                <tr className="truncate">
                  <td className="max-w-xs w-1/3 truncate">{table.name}</td>
                  <td className="max-w-xs w-1/3 truncate">{table.in}</td>
                  <td className="max-w-xs w-1/3 truncate">{table.required}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-2 whitespace-no-wrap">
            <button
              className="inline-block ml-2 bg-grey-lighter hover:bg-grey text-grey-darkest font-bold py-2 px-4"
              type="button"
              title="Remove Parameter"
              onClick={() => fields.remove(index)}
            >
              <svg
                className="fill-current text-blue icon-trash h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className="primary"
                  d="M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"
                />
                <path
                  className="secondary"
                  d="M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => this.showModal()}
              className="inline-block ml-2 bg-grey-lighter hover:bg-grey text-grey-darkest font-bold py-2 px-4"
            >
              <svg
                className="icon-edit fill-current text-blue h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className="primary"
                  d="M4 14a1 1 0 0 1 .3-.7l11-11a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-11 11a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-3z"
                />
                <rect width="20" height="2" x="2" y="20" className="secondary" rx="1" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={
            !this.state.isVisible
              ? 'hidden'
              : 'modal-background fixed h-screen w-screen pin-t pin-l'
          }
        >
          <div
            className={
              !this.state.isVisible ? 'hidden' : 'flex h-screen mx-auto justify-center align-center'
            }
          >
            <li className="fixed pin-t bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-16">
              <div className="mb-4">
                <Field
                  name={`${parameter}.name`}
                  type="text"
                  component={RenderField}
                  label="Name"
                />
              </div>
              <div className="mb-4">
                <Field
                  name={`${parameter}.in`}
                  type="text"
                  component={RenderField}
                  label="In"
                  props={{ options: ['path', 'query'] }}
                />
              </div>
              <div className="mb-4">
                <Field
                  name={`${parameter}.default`}
                  type="text"
                  component={RenderField}
                  label="Default"
                  placeholder="Default value"
                />
              </div>
              <div className="mb-4">
                <Field
                  name={`${parameter}.required`}
                  type="text"
                  component={RenderField}
                  label="Required"
                  props={{ options: ['true', 'false'] }}
                />
              </div>
              <div className="mb-4">
                <Field
                  name={`${parameter}.description`}
                  type="text"
                  component={RenderField}
                  label="Description"
                />
              </div>
              <Toggle
                name="enum"
                label="Add Possible Values"
                checked={this.state.checked}
                onToggle={() => this.handleToggle()}
              />
              {this.state.checked && schema}
              <button
                className="ml-2 bg-grey-lighter hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex"
                type="button"
                title="Remove Parameter"
                onClick={() => fields.remove(index)}
              >
                <svg
                  className="fill-current text-blue icon-trash h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="primary"
                    d="M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"
                  />
                  <path
                    className="secondary"
                    d="M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"
                  />
                </svg>
              </button>
              <button
                className="ml-2 bg-grey-lighter hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex"
                type="button"
                title="Save Parameter"
                onClick={() => this.hideModal()}
              >
                Save Parameter
              </button>
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default Parameter;
