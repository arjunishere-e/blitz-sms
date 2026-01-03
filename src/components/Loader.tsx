import { useEffect, useState } from "react";
import "../styles/loader.css";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <div className="loader-visual">
          <div className="loader-orb"></div>
          <div className="loader-ring"></div>
          <div className="loader-dots">
            <span className="loader-dot"></span>
            <span className="loader-dot"></span>
            <span className="loader-dot"></span>
          </div>
        </div>

        <div className="loader-text-group">
          <h1 className="loader-title">BlitzSMS</h1>
          <p className="loader-subtitle">Redefining SMS Marketing</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
