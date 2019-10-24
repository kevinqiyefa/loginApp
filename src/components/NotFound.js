import React from 'react';
import notFoundImg from '../assets/error.png';

export default function NotFound() {
  return (
    <div className="text-center">
      <img
        src={notFoundImg}
        alt="404 Noot Found"
        className="mw-100"
        style={{ maxHeight: '500px' }}
      />
    </div>
  );
}
