import React from 'react';

export default function MainPage() {
  const loginUser = sessionStorage.getItem('loginUser');
  return (
    <div className="mt-5 pt-5 text-center font-weight-bold text-uppercase">
      <h2>{`Welcome Back! ${loginUser}`}</h2>
    </div>
  );
}
