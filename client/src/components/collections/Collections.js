import React from 'react';
import { connect } from 'react-redux';

const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map(el =>
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {})
  );

function Collections(props) {
  const { endpoints, loading } = props;
  let content;
  if (endpoints) {
    const collectionNames = reducedFilter(
      endpoints,
      ['collectionName'],
      (itemA, itemB) => itemA.collectionName !== itemB.collectionName
    );
    console.log(collectionNames);
  }
  return <div>{content}</div>;
}

const mapStateToProps = state => {
  return {
    endpoints: state.endpoints.endpoints,
    loading: state.endpoints.loading
  };
};

export default connect(mapStateToProps)(Collections);
