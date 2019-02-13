import React from 'react';
import {shallow, mount, render} from 'enzyme';

import {Provider} from 'react-redux';
import store from '../store';
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../App';
import Header from '../containers/Header';
import Dashboard from '../containers/Dashboard';

describe('A suite of tests for the App component', () => {
    it('should render with no errors', () => {
        shallow(<App />);
        shallow(<Header />);
        shallow(<Dashboard />);
        shallow((  
            <div className='h-screen container mx-auto'>
                <Header />
                <Dashboard />
            </div>
        ));
    })

    it('should render a Header and Dashboard component', () => {
        // const component = mount((
        //   <Provider store={store}>
        //     <Router>
        //       <App />
        //     </Router>
        //   </Provider>
        // ));
        const component = mount(<App />);
        expect(component.find('div')).to.equal(true);
    })
})