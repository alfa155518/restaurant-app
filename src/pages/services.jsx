import ScrollToTop from "../components/scrollToTop";
import WrapperNav from "../components/wrapperNav";
import Footer from "../layout/footer";
import ChartsSales from "../charts/chartSales";
import ServicesProducts from "../sections/servicesProduct";
import Chefs from "../sections/chefs";
import "../sass/pages/services.css";

function Services() {
  return (
    <>
      <WrapperNav sectionName={"Services"} />
      <section className="services-container">
        <ChartsSales />
        <ServicesProducts />
        <Chefs />
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Services;
