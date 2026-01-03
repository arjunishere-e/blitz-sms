import "../styles/textsection.css";
import featured1 from "../assets/featured-1.jpeg";
import featured2 from "../assets/featured-2.jpeg";
import featured3 from "../assets/featured-3.jpeg";

const TrendingIcon = ({ color }: { color: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const BarChartIcon = ({ color }: { color: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const RocketIcon = ({ color }: { color: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const LightbulbIcon = ({ color }: { color: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
  >
    <line x1="9" y1="18" x2="15" y2="18" />
    <line x1="10" y1="22" x2="14" y2="22" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
  </svg>
);

const BriefcaseIcon = ({ color }: { color: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const TextSection = () => {
  const stats = [
    {
      number: "8+",
      label: "Years Experience",
      tag: "Years Experience",
      detail: "Building scalable digital products for growing businesses.",
    },
    {
      number: "50K",
      label: "Customers",
      tag: "Client Experience",
      detail: "Trusted by over 50,000 customers across the globe.",
    },
    {
      number: "10K",
      label: "Completed Projects",
      tag: "Complete Projects",
      detail: "Successfully delivered high-impact digital solutions.",
    },
    {
      number: "90+",
      label: "Team Members",
      tag: "Team Member",
      detail: "A diverse team of designers, engineers, and strategists.",
    },
  ];

  return (
    <section className="text-section">
      <div className="text-shell">
        {/* ===== SECTION 1 ===== */}
        <div className="growth-top">
          <div className="growth-left">
            <h2>
              Passionate About <br />
              Helping You Grow
            </h2>
          </div>

          <div className="growth-right">
            <p>
              We leverage cutting-edge technology to transform how businesses
              connect with their customers. Our solutions are built to drive
              engagement and boost results effortlessly.
            </p>

            <button className="discover-btn">Discover more</button>
          </div>
        </div>

        {/* ===== STATS CARDS (BELOW TEXT) ===== */}
        <div className="stats-row">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-pill">
                <span className="pill-dot" />
                <span>{stat.tag}</span>
              </div>
              <h3>{stat.number}</h3>
              <span>{stat.label}</span>

              {/* EXPAND CONTENT */}
              <div className="stat-details">{stat.detail}</div>
            </div>
          ))}
        </div>

        {/* ===== SECTION 2 ===== */}
        <div className="map-container">
          <div className="map-text">
            <h3>
              Accelerate Your Growth <br />
              with Email Marketing
            </h3>
            <p>
              Create campaigns that scale globally with data-driven insights and
              intelligent automation.
            </p>
          </div>

          <div className="map-visual">
            <div className="world-map">
              <div className="map-markers">
                <span
                  className="map-marker map-marker-main"
                  style={{ top: "48%", left: "56%" }}
                >
                  <span className="marker-pulse" />
                  <span className="marker-dot" />
                </span>
                <span
                  className="map-marker"
                  style={{ top: "18%", left: "25%" }}
                >
                  <TrendingIcon color="#10b981" />
                </span>
                <span
                  className="map-marker"
                  style={{ top: "22%", left: "68%" }}
                >
                  <BarChartIcon color="#f59e0b" />
                </span>
                <span
                  className="map-marker"
                  style={{ top: "68%", left: "78%" }}
                >
                  <RocketIcon color="#6366f1" />
                </span>
                <span
                  className="map-marker"
                  style={{ top: "72%", left: "28%" }}
                >
                  <LightbulbIcon color="#eab308" />
                </span>
                <span
                  className="map-marker"
                  style={{ top: "42%", left: "15%" }}
                >
                  <BriefcaseIcon color="#ec4899" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SECTION 3 ===== */}
        <div className="feature-grid">
          <div
            className="feature-card feature-one"
            style={{
              backgroundImage: `url(${featured1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            
          </div>

          <div
            className="feature-card feature-two"
            style={{
              backgroundImage: `url(${featured2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            
          </div>

          <div
            className="feature-card feature-three"
            style={{
              backgroundImage: `url(${featured3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
          
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextSection;
