// import React from 'react';
// import {connect} from 'react-redux';

// export default () => Component => {
//     function Loading(props) {
//         const {loading, ...passThroughProps} = props;
//         if (loading) {
//             return <div>Loading...</div>;
//         }

//         return <Component {...passThroughProps} />;
//     }

//     const displayName = Component.displayName || Component.name || 'Component';
//     Loading.displayName = `Loading(${displayName})`;

//     const mapStateToProps = (state, props) => ({
//         loading: state.endpoints.loading,
//         error: state.endpoints.error
//     });

//     return connect(mapStateToProps)(Loading);
// };