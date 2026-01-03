import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-shell">
          {/* Large BlitzSMS Text */}
          <div className="footer-hero">
            <h2 className="footer-hero-text">
              Blitz<span className="highlight">SMS</span>
            </h2>
          </div>

          {/* Main Footer Content */}
          <div className="footer-content">
            {/* Column 1: Brand & Contact */}
            <div className="footer-col footer-brand">
              <div className="footer-logo">
                <span className="logo-icon">⚡</span>
                <span className="logo-text">BlitzSMS</span>
              </div>
              <div className="footer-contact">
                <h4>Contact Us</h4>
                <a href="mailto:work.arjunravikumar@gmail.com">
                  work.arjunravikumar@gmail.com
                </a>
                <a href="tel:+918138960267">+91 81389 60267</a>
              </div>
            </div>

            {/* Column 2: Product */}
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#customers">Customers</a>
                </li>
                <li>
                  <a href="#solutions">Solutions</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Connect */}
            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="#instagram">Instagram</a>
                </li>
                <li>
                  <a href="#twitter">X (Twitter)</a>
                </li>
                <li>
                  <a href="#youtube">YouTube</a>
                </li>
                <li>
                  <a href="#linkedin">LinkedIn</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Pages */}
            <div className="footer-col">
              <h4>Pages</h4>
              <ul>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter Your Email" />
              <button type="submit" aria-label="Subscribe">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p className="copyright">Copyright ©2026 BlitzSMS</p>
            <p className="design-credit">Developed by : arjunravikumar</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
