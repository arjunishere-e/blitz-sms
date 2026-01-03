import { motion } from "framer-motion";
import heroImg from "../assets/hero-image.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* IMAGE LAYER */}
      <motion.img
        src={heroImg}
        className="hero-img"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

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
