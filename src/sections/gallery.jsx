import SwipperSlider from "../components/swipper";
import useObserver from "../hooks/useObserver";

import gallery_1 from "../images/gallery/gallery-1.WebP";
import gallery_2 from "../images/gallery/gallery-2.WebP";
import gallery_3 from "../images/gallery/gallery-3.WebP";
import gallery_4 from "../images/gallery/gallery-4.WebP";
import gallery_5 from "../images/gallery/gallery-5.WebP";

import "../sass/sections/gallery.css";

function Gallery() {
  const [ref, inView] = useObserver();
  const arrayImages = [gallery_1, gallery_2, gallery_3, gallery_4, gallery_5];
  return (
    <>
      <h2 className="section-name">
        Food <strong>Gallery</strong>
      </h2>
      <section
        ref={ref}
        className={`gallery-container ${
          inView ? "animate__animated animate__fadeInUpBig show" : ""
        }`}>
        <SwipperSlider arrayImages={arrayImages} />
      </section>
    </>
  );
}

export default Gallery;
