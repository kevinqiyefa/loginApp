import React from 'react';

export default function SigninWrapper({ children }) {
  return (
    <div className="row h-100 jumbotron-fluid m-0">
      <div
        className="col-12 col-sm-7 col-md-auto ml-auto p-0"
        style={{ width: '550px' }}
      >
        {children}
      </div>
    </div>
  );
}
