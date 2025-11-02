import React from 'react';

export default function PortfolioModal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-custom" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-custom">
          <button className="btn-close-custom" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body-custom">
          <div className="container">
            <h2 className="section-heading text-uppercase mb-0">{project.title}</h2>
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
              <div className="divider-custom-line"></div>
            </div>
            <img 
              className="img-fluid rounded mb-5" 
              src={project.image} 
              alt={project.title} 
              style={{ maxWidth: '100%' }} 
            />
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda 
              ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit 
              asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
            </p>
            <button className="close-modal" onClick={onClose}>
              <i className="fas fa-xmark fa-fw me-2"></i>
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
