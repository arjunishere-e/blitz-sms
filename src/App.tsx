import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TextSection from "./components/TextSection";
import ExpertsBrands from "./components/ExpertsBrands";
import ConnectMarketing from "./components/ConnectMarketing";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import SmoothScroll from "./SmoothScroll";
import footerImage from "./assets/footer.jpeg";

function App() {
  return (
    <>
      <Loader />
      <div data-scroll-container className="scroll-container">
        <Navbar />
        <Hero />
        <TextSection />
        <ExpertsBrands />
        <ConnectMarketing />
        <Footer />
        <div className="footer-image-section">
          <img
            src={footerImage}
            alt="Footer decoration"
            className="footer-image"
          />
        </div>
      </div>
      <SmoothScroll />
    </>
  );
}

export default App;
