import NavBar from "../components/NavBar";
import useObserver from "../hooks/useObserver";
import heroImg from "../images/category-5.WebP";
import LazyLoad from "react-lazyload";
import "../sass/sections/hero.css";
function Hero() {
  const [ref, inView] = useObserver();
  return (
    <section className="hero-container">
      <NavBar />
      <div className="hero-content">
        <div className="info">
          <h2 className="title roboto-medium-italic">
            Welcome to Our Tasty <strong>Foods</strong>
          </h2>
          <article className="text roboto-black-italic ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            minus magnam eligendi placeat, aliquid atque? Nobis doloribus
            accusantium dignissimos obcaecati recusandae vitae iste quibusdam
            minus at sed. Expedita, maiores esse?
          </article>
          <div className="btn-container">
            <button className="btn">Order Now</button>
            <button className="btn">View Menu</button>
          </div>
        </div>
        <div
          ref={ref}
          className={`hero-img ${
            inView ? "animate__animated animate__zoomIn" : ""
          }`}>
          <LazyLoad height={200}>
            <img src={heroImg} alt="hero-img" />
          </LazyLoad>
        </div>
      </div>
    </section>
  );
}

export default Hero;
