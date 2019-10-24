import React from 'react';
import { Link } from 'react-router-dom';
import forgot from '../assets/forgot.png';

export default function ForgotPassWord() {
  return (
    <div className="h-100 jumbotron-fluid m-0">
      <div className="row full-height-vh m-0 mt-5 pt-5 d-flex align-items-center justify-content-center">
        <div className="col-md-7 col-sm-12">
          <div className="card">
            <div className="card-body bg-light p-0">
              <div className="row m-0">
                <div className="col-lg-6 d-none d-lg-block text-center py-2">
                  <img
                    src={forgot}
                    alt=""
                    className="mw-100 h-auto"
                    width="300"
                    height="230"
                  />
                </div>
                <div className="col-lg-6 col-md-12 bg-white px-4 py-5">
                  <h4 className="mb-2 card-title">Recover Password</h4>
                  <p className="card-text mb-3">
                    Please enter your email address and we'll send you
                    instructions on how to reset your password.
                  </p>
                  <form>
                    <input
                      type="email"
                      className="form-control mb-3"
                      placeholder="Email"
                      required
                    />
                    <div className="d-flex justify-content-between">
                      <div>
                        <Link to="/login">
                          <button className="btn btn-outline-info">
                            Back To Login
                          </button>
                        </Link>
                      </div>
                      <div>
                        <button className="btn btn-primary" type="submit">
                          Recover
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
