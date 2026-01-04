import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Ballpit from "./Ballpit";
import "../styles/hero.css";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="hero">
      {/* BALLPIT ANIMATION LAYER */}
      <div className="hero-ballpit-wrapper">
        <Ballpit
          key={isMobile ? "mobile" : "desktop"}
          count={isMobile ? 80 : 150}
          gravity={isMobile ? 0.3 : 0.5}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={!isMobile}
          colors={[0xffffff, 0x00ff00]}
          minSize={isMobile ? 0.35 : 0.5}
          maxSize={isMobile ? 0.7 : 1}
        />
      </div>

      {/* TEXT LAYER */}
      <div className="hero-content">
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Send Personalized SMS
          <br />
          Messages That Drive Results
        </motion.h1>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <button className="btn btn-primary">Start for free</button>
          <button className="btn btn-secondary">Learn More</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
