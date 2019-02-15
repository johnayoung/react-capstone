import React from 'react';
import { shallow, mount } from 'enzyme';
import Error from './Error';

describe('A suite of tests for the App component', () => {
  // Smoke test
  it('should render with no errors', () => {
    const component = shallow(<Error />);

    expect(component).toMatchSnapshot();
  });

  it('should render banner text correctly with given props', () => {
    const error = 'This is a test message';
    const component = shallow(<Error error={error} />);

    expect(component).toMatchSnapshot();
  });
});
