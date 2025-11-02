import React from 'react';

export default function Contact() {
  return (
    <section className="page-section my-5" id="contact">
      <div className="container">
        <h2 className="section-heading text-center text-uppercase mb-0">Contact Me</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <input className="form-control-custom" type="text" placeholder="Name" />
            <input className="form-control-custom" type="email" placeholder="Email Address" />
            <input className="form-control-custom" type="tel" placeholder="Phone Number" />
            <textarea 
              className="form-control-custom" 
              rows="5" 
              placeholder="Message" 
              style={{ resize: 'none' }}
            ></textarea>
            <button className="close-modal">Send</button>
          </div>
        </div>
      </div>
    </section>
  );
}
