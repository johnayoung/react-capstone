import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';

describe('A suite of tests for the App component', () => {
  // Smoke test
  it('should render with no errors', () => {
    const component = shallow(<LandingPage />);

    expect(component).toMatchSnapshot();
  });
});
