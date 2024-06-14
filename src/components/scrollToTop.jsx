import { FaArrowUp } from "react-icons/fa";
import "../sass/components/scroll-to-top.css";
import { useRef } from "react";
function ScrollToTop() {
  const arrow = useRef();

  // Show and hide the arrow
  window.onscroll = () => {
    if (window.scrollY >= 2100) {
      arrow.current.style.display = "block";
    } else {
      arrow.current.style.display = "none";
    }
  };

  // Reset the user scroll
  function resetScroll() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="arrow-to-top" ref={arrow} onClick={resetScroll}>
      <FaArrowUp className="icon" />
    </div>
  );
}

export default ScrollToTop;
