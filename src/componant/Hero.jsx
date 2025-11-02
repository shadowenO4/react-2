import React from 'react';

export default function Hero() {
  return (
    <header className="masthead text-center text-white my-3">
      <div className="container">
        <svg className="avatar" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="100" fill="white"/>
          <circle cx="100" cy="70" r="30" fill="#2c3e50"/>
          <path d="M 40 120 Q 50 100 70 110 L 60 170 L 80 170 L 90 110 L 110 110 L 120 170 L 140 170 L 130 110 Q 150 100 160 120 L 160 200 L 40 200 Z" fill="#2c3e50"/>
        </svg>
        <h1 className="mb-0">START BOOTSTRAP</h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <h2>Graphic Artist - Web Designer - Illustrator</h2>
      </div>
    </header>
  );
}
