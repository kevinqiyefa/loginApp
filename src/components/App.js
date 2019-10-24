import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import NotFound from './NotFound';
import MainPage from './MainPage';
import SignIn from './SignIn';
import SignUp from './SignUp';

import ProtectedRoute from './ProtectedRoute';
import NoAuthRoute from './NoAuthRoute';
import ForgotPassWord from './ForgotPassWord';

function App() {
  const [isLogin, setIsLogin] = useState(
    () => !!sessionStorage.getItem('loginUser')
  );

  return (
    <div className="position-relative d-flex flex-column vh-100">
      <Header isAuthenticated={isLogin} setIsLogin={setIsLogin} />

      <Switch>
        <NoAuthRoute
          exact
          path="/login"
          isAuthenticated={isLogin}
          component={SignIn}
          setIsLogin={setIsLogin}
        />

        <NoAuthRoute
          exact
          path="/signup"
          isAuthenticated={isLogin}
          component={SignUp}
        />

        <NoAuthRoute exact path="/forgot-password" component={ForgotPassWord} />

        <ProtectedRoute
          exact
          path="/"
          component={MainPage}
          isAuthenticated={isLogin}
        />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
