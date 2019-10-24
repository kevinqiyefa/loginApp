import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

function Header({ isAuthenticated, setIsLogin }) {
  const handleSignOut = () => {
    sessionStorage.removeItem('loginUser');
    setIsLogin(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          LOGO
        </NavLink>
        <button
          className="navbar-toggler bg-secondary "
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            {!isAuthenticated && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Sign In
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          {isAuthenticated && (
            <button
              type="button"
              className="btn btn-outline-light ml-auto"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Header);
