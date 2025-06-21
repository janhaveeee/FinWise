import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
// optional if you want custom styles

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-3 mt-auto">
      <div className="container">
        <div className="row text-center text-md-start">
          
          <div className="col-md-4 mb-3">
            <h5>FinWise</h5>
            <p>Helping you take control of your financial future with AI-powered insights and planning tools.</p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p><i className="bi bi-geo-alt-fill me-2"></i> Mumbai, India</p>
            <p><i className="bi bi-envelope-fill me-2"></i> contact@finwise.ai</p>
            <p><i className="bi bi-phone-fill me-2"></i> +91 98765 43210</p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Connect</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-white"><i className="bi bi-facebook fs-5"></i></a>
              <a href="#" className="text-white"><i className="bi bi-instagram fs-5"></i></a>
              <a href="#" className="text-white"><i className="bi bi-linkedin fs-5"></i></a>
              <a href="https://github.com/janhaveeee" className="text-white"><i className="bi bi-github fs-5"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-light my-3" />

        <div className="text-center small">
          © {new Date().getFullYear()} FinWise | Built with 💡 by Janhavi Revdekar | <a href="#" className="text-white text-decoration-underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
