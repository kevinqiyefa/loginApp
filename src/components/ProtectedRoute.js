import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute(props) {
  const {
    isAuthenticated,
    component: RouteComponent,
    ...propsForRoute
  } = props;

  // the component to be rendered by the Route, or a Redirect if not logged in
  function ChildComponent(props) {
    if (isAuthenticated) {
      // pass-thru if authenticated

      return <RouteComponent {...props} />;
    } else {
      // redirect if not authenticated
      return <Redirect to="/login" />;
    }
  }
  return (
    <Route
      {...propsForRoute}
      render={routerProps => <ChildComponent {...routerProps} />}
    />
  );
}
