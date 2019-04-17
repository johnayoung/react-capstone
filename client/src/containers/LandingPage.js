import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Icon from '../components/icons/Index';
import hero from '../style/assets/hero-browse-apis.gif';
import OfficeButton from '../components/OfficeButton';

export const LandingPage = props => {
  const { appName, header, subheader } = props.environment;
  return (
    <section className="h-screen w-screen flex sm:pt-8 md:pt-12 lg:pt-20 lg:cover-background">
      <div className="container flex flex-col lg:max-w-screen-lg mx-auto px-6 py-8 sm:py-16 md:py-24">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col mb-6 md:w-1/2">
            <div className="block mb-4">
              <Icon name="logo" className="fill-current w-8 h-8 text-grey-darker float-left" />
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-grey-darker">
                {appName}
              </p>
            </div>
            <div className="mb-12">
              <h1 className="font-semibold text-grey-darkest text-4xl sm:text-5xl md:text-6xl mb-4 leading-none">
                {header}
              </h1>
              <p className="text-xl sm:text-2xl text-grey-darkest leading-normal max-w-lg">
                {subheader}
              </p>
              <Link to="/browse">
                <button className="btn btn-green mt-16 mb-8" type="button">
                  Browse APIs
                </button>
              </Link>
              <p className="label-input">
                Need some help? Send us a message at{' '}
                <a href="mailto:support@cryptosheets.com">support@cryptosheets.com</a>
              </p>
              {/* <OfficeButton /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    environment: state.environment
  };
};

export default connect(mapStateToProps)(LandingPage);
