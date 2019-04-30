import React from 'react';
import PropTypes from 'prop-types';

function Collection(props) {
  const { favicon, collectionName, category } = props;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={favicon} alt={collectionName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-grey-darker text-base">Dummy text.</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
          #{category}
        </span>
      </div>
    </div>
  );
}

Collection.defaultProps = {
  collectionName: '',
  favicon: '',
  category: 'all'
};

export default Collection;
