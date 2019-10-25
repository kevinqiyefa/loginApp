import React, { useState } from 'react';
import SigninWrapper from './SigninWrapper';
import { Link } from 'react-router-dom';

export default function SignUp({ history }) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [isAgree, setIsAgree] = useState(false);
  const [showUserExistError, setShowUserExistError] = useState(false);

  const [validPassWord, setValidPassWord] = useState(false);

  const data = JSON.parse(localStorage.getItem('signupApp') || '{}');

  const handleSubmit = e => {
    e.preventDefault();

    if (password === confirmedPassword) {
      const newUser = {
        [userName]: {
          userName,
          email,
          password
        }
      };
      if (data[userName]) {
        setShowUserExistError(true);
      } else {
        const newData = { ...data, ...newUser };
        localStorage.setItem('signupApp', JSON.stringify(newData));
        setTimeout(() => history.push('/login'), 1000);
      }
    } else {
      setValidPassWord(true);
      setTimeout(() => setValidPassWord(false), 3000);
    }
  };

  const notDisable =
    userName && email && password && confirmedPassword && isAgree;
  console.log('sss');
  return (
    <SigninWrapper>
      <div className="h-100 bg-light container p-5">
        <form className="mt-4" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>

          {showUserExistError && (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              Sorry... username already taken
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={() => setShowUserExistError(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Username"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              required
              minLength="5"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              minLength="5"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className={`form-control ${validPassWord && 'is-invalid'}`}
              name="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength="5"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className={`form-control ${validPassWord && 'is-invalid'}`}
              name="confirm_password"
              placeholder="Confirm Password"
              value={confirmedPassword}
              onChange={e => setConfirmedPassword(e.target.value)}
              required
              minLength="5"
            />
            {validPassWord && (
              <div className="invalid-feedback">
                * Please make sure your passwords match.
              </div>
            )}
          </div>
          <div className="form-group form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="accept-term"
              checked={isAgree}
              onChange={e => setIsAgree(e.target.checked)}
              required
            />
            <label className="form-check-label" htmlFor="accept-term">
              <small className="text-secondary">
                I agree to the <a href="/">Terms of Use</a>
              </small>
            </label>
          </div>

          <div className="form-group row container px-0 mx-0">
            <button
              type="submit"
              className="btn btn-info btn-lg col-md-auto col-sm-12"
              disabled={!notDisable}
            >
              Sign Up
            </button>
          </div>
        </form>
        <hr className="my-5" />
        <div className="text-center text-secondary">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </div>
    </SigninWrapper>
  );
}
