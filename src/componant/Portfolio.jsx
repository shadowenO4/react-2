import React, { useState } from 'react';
import PortfolioModal from './PortfolioModal';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
  { id: 1, title: 'Cabin', image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=500&h=350&fit=crop' },
  { id: 2, title: 'Cake', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&h=350&fit=crop' },
  { id: 3, title: 'Circus', image: 'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?w=500&h=350&fit=crop' },
  { id: 4, title: 'Game', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=350&fit=crop' },
  { id: 5, title: 'Safe', image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=500&h=350&fit=crop' },
  { id: 6, title: 'Submarine', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=350&fit=crop' },
];

  return (
    <>
      <section className="page-section portfolio my-5" id="portfolio">
        <div className="container">
          <h2 className="section-heading text-center text-uppercase mb-0 ">Portfolio</h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row justify-content-center">
            {projects.map((project) => (
              <div key={project.id} className="col-md-6 col-lg-4">
                <div className="portfolio-item" onClick={() => setSelectedProject(project)}>
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-item-caption">
                    <div className="portfolio-item-caption-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <PortfolioModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}
