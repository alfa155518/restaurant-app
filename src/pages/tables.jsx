import Table from "../components/Table";
import ScrollToTop from "../components/scrollToTop";
import WrapperNav from "../components/wrapperNav";
import Footer from "../layout/footer";
import "../sass/pages/tables.css";
function Tables() {
  return (
    <>
      <WrapperNav sectionName={"Tables"} />
      <h2 className="section-name">
        Book<strong>Table</strong>
        <p className="text">
          Reserve a table that suits you with the people you love, whether your
          family, your lover, your friends...etc
        </p>
      </h2>
      <section className={`tables-wrapper`}>
        <Table />
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Tables;
