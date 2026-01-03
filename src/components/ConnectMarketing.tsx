import "../styles/connectmarketing.css";
import cmPhoto from "../assets/bv.jpg";

const ConnectMarketing = () => {
  return (
    <section className="connect-marketing">
      <div className="cm-shell">
        <div className="cm-head">
          <div className="cm-title-block">
            <h3>Connect with the Specialists in SMS Marketing</h3>
          </div>
          <p className="cm-copy">
            Our team of experienced SMS marketing specialists brings a wealth of
            knowledge to the table. They are committed to assisting businesses
            in achieving outstanding outcomes.
          </p>
        </div>

        <div className="cm-cards">
          <div className="cm-photo">
            <img src={cmPhoto} alt="Marketing specialist at laptop" />
          </div>

          <div className="cm-article">
            <div className="cm-pill">⚡ TASKFLOW</div>
            <h4>The Future of SMS Marketing: Trends and Predictions</h4>
            <div className="cm-meta">
              <span className="cm-chip">Beverly B. Prejean</span>
              <span className="cm-chip">12 Jun, 2024</span>
            </div>
          </div>
        </div>

        <div className="cm-cta">
          <div className="cm-cta-text">
            <h4>
              Transform Your Marketing Approach with{" "}
              <span className="cm-cta-accent">TASFLOW</span>
            </h4>
            <p>
              Connect with your audience using TASFLOW&apos;s personalized SMS
              campaigns to increase engagement and conversions. Streamline your
              marketing efforts with our intuitive platform and experience
              rapid, tangible results.
            </p>
          </div>
          <button className="cm-cta-btn">Join Us</button>
        </div>
      </div>
    </section>
  );
};

export default ConnectMarketing;
