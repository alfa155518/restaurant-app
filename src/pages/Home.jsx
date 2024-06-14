import ScrollToTop from "../components/scrollToTop";
import Footer from "../layout/footer";
import Hero from "../sections/Hero";
import About from "../sections/about";
import Category from "../sections/category";
import Delivery from "../sections/delivery";
import Feedback from "../sections/feedback";
import Gallery from "../sections/gallery";
import Offers from "../sections/offers";
import PopularProduct from "../sections/popularProduct";

function Home() {
  return (
    <>
      <div className="Home p-relative">
        {/* ********* Hero Section ******** */}
        <Hero />
        {/* ********* Category Section ******** */}
        <Category />
        {/* ********* Offers Section ******** */}
        <Offers />
        {/* ********* About Section ******** */}
        <About />
        {/* ********* Delivery Section ******** */}
        <Delivery />
        {/* ********* Popular Section ******** */}
        <PopularProduct />
        {/* ********* Feedback Section ******** */}
        <Feedback />
        {/* ********* Gallery Section ******** */}
        <Gallery />
        {/* ********* Footer Section ******** */}
        <Footer />
        {/* ********* Scroll To Top Arrow ******** */}
      </div>
      <ScrollToTop />
    </>
  );
}

export default Home;
