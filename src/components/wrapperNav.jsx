import img_1 from "../images/lettuce.WebP";
import img_2 from "../images/hot-pepper.WebP";
import NavBar from "./NavBar";
import "../sass/components/wrapper-nav.css";
import useObserver from "../hooks/useObserver";

function WrapperNav({ sectionName }) {
  const [ref, inView] = useObserver();
  return (
    <section className="wrapper-nav">
      <NavBar />
      <div
        ref={ref}
        className={`nik-name ${
          inView ? " animate__animated animate__fadeInUp" : ""
        }`}>
        <div className="wrapper-img">
          <img src={img_1} alt="lettuce" />
        </div>
        <h2 className="wrapper-name roboto-black">{sectionName}</h2>
        <div className="wrapper-img">
          <img src={img_2} alt="hot-pepper" />
        </div>
      </div>
    </section>
  );
}

export default WrapperNav;
