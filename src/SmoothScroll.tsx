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
      //tablet: { smooth: true },
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
