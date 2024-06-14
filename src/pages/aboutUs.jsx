import ScrollToTop from "../components/scrollToTop";
import WrapperNav from "../components/wrapperNav";
import Footer from "../layout/footer";
import About from "../sections/about";
import AboutUsSection from "../sections/about-Us";
import Chefs from "../sections/chefs";
import "../sass/pages/about-us.css";

function AboutUs() {
  return (
    <>
      <WrapperNav sectionName={"About-Us"} />
      <section className="wrapper-about-us">
        <About />
        <AboutUsSection />
        <Chefs/>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default AboutUs;
