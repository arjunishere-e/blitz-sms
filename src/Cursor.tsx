import { useEffect } from "react";
import "./styles/cursor.css";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLElement;

    window.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  }, []);

  return <div className="cursor" />;
};

export default Cursor;
