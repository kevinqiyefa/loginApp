import React, { useState } from 'react';
import SigninWrapper from './SigninWrapper';
import { Link } from 'react-router-dom';

function SignIn({ setIsLogin }) {
  const rememberedUser = JSON.parse(localStorage.getItem('rememberUser'));

  const [userName, setUserName] = useState(
    rememberedUser ? rememberedUser.userName : ''
  );
  const [password, setPassword] = useState(
    rememberedUser ? rememberedUser.password : ''
  );

  const [isRemember, setIsRemember] = useState(false);

  const [showError, setShowError] = useState(false);

  const data = JSON.parse(localStorage.getItem('signupApp') || '{}');

  const handleSubmit = e => {
    e.preventDefault();

    if (userName in data && data[userName].password === password) {
      if (isRemember) {
        const savedUser = { userName, password };
        localStorage.setItem('rememberUser', JSON.stringify(savedUser));
      }

      sessionStorage.setItem('loginUser', userName);
      setIsLogin(true);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <SigninWrapper>
      <div className="h-100 bg-light container p-5">
        <form className="mt-4 mb-5" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div className="form-group mt-3">
            <input
              type="text"
              className={`form-control form-control-lg ${showError &&
                'is-invalid'}`}
              value={userName}
              onChange={e => setUserName(e.target.value)}
              name="username"
              placeholder="Username"
              minLength="5"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className={`form-control form-control-lg ${showError &&
                'is-invalid'}`}
              name="password"
              placeholder="Password"
              value={password}
              minLength="5"
              onChange={e => setPassword(e.target.value)}
              required
            />
            {showError && (
              <div className="invalid-feedback">
                * Incorrect username or password.
              </div>
            )}
          </div>

          <div className="form-group row px-0 mx-0">
            <div className="form-check-inline col-5 px-0 mx-0">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember-me"
                checked={isRemember}
                onChange={e => setIsRemember(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="remember-me">
                <small className="text-secondary">Remember me</small>
              </label>
            </div>
            <div className="col-2"></div>
            <div className="col-5 px-0 mx-0 text-right">
              <Link to="/forgot-password">
                <small>Forgot password?</small>
              </Link>
            </div>
          </div>

          <div className="form-group row container px-0 mx-0">
            <button
              type="submit"
              className="btn btn-info btn-lg col-md-auto col-sm-12"
              disabled={!(userName && password)}
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="text-center mt-5 pt-5 text-secondary">
          Not a member? <Link to="/signup">Signup Now</Link>
        </div>
      </div>
    </SigninWrapper>
  );
}

export default SignIn;
