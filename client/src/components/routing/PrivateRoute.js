import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ children, auth }) {
  console.log('========');
  const { isAuthenticated, loading } = auth;
  return !isAuthenticated ? <Navigate to='/login' /> : children;
}

//export default PrivateRoute;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(PrivateRoute);
