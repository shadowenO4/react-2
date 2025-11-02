import React from "react" 


export default function Footer() {
  return (
    <>
      <footer className="footer-custom text-center ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="footer-heading">Location</h4>
              <p className="lead mb-0">2215 John Daniel Drive<br/>Clark, MO 65243</p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="footer-heading">Around the Web</h4>
              <a className="btn-social" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="btn-social" href="#"><i className="fab fa-twitter"></i></a>
              <a className="btn-social" href="#"><i className="fab fa-linkedin-in"></i></a>
              <a className="btn-social" href="#"><i className="fab fa-dribbble"></i></a>
            </div>
            <div className="col-lg-4">
              <h4 className="footer-heading">About Freelancer</h4>
              <p className="lead mb-0">
                Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; Your Website 2025</small>
        </div>
      </div>
    </>
  );
}