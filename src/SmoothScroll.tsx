import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = () => {
  useEffect(() => {
    const container = document.querySelector(
      "[data-scroll-container]"
    ) as HTMLElement | null;

    if (!container) return;

    const scroll = new LocomotiveScroll({
      el: container,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true, breakpoint: 768 },
      multiplier: 1,
      lerp: 0.1,
    });

    // Update scroll on window resize
    const handleResize = () => {
      scroll.update();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      scroll.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
