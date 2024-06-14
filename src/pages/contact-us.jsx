import ScrollToTop from "../components/scrollToTop";
import WrapperNav from "../components/wrapperNav";
import Footer from "../layout/footer";
import "../sass/pages/contact-us.css";
import ContactForm from "../sections/contact-form";
import ContactMethods from "../sections/contact-methods";
function ContactUs() {
  return (
    <>
      <WrapperNav sectionName={"Contact-Us"} />
      <section className="contact-wrapper">
        <ContactMethods />
        <ContactForm />
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default ContactUs;
