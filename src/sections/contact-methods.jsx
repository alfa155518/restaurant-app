import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import useObserver from "../hooks/useObserver";
function ContactMethods() {
  const [ref, inView] = useObserver();
  return (
    <>
      <h2 className="section-name">
        We'd Love to hear from <strong>You</strong>
        <p className="text">
          Tell us about your experience! Send us your feedback on using this
          app.
        </p>
      </h2>
      <section
        ref={ref}
        className={`contact-methods ${
          inView ? "animate__animated animate__fadeInUpBig show" : ""
        }`}>
        <div className="method">
          <IoLocationSharp className="icon" />
          <p className="info roboto-black-italic">
            <strong className="method-name roboto-black">Office</strong>
            <strong className="method-info">
              Come, say hello at our Ofice HQ
            </strong>
            <span>3487 Hummingbird Way Quincy, MA 02169</span>
          </p>
        </div>
        <div className="method">
          <MdEmail className="icon" />
          <p className="info roboto-black-italic">
            <strong className="method-name roboto-black">Email</strong>
            <strong className="method-info">
              Our Freindly team is always there to help you
            </strong>
            <span>alfa@gmail.com</span>
          </p>
        </div>
        <div className="method">
          <FaPhoneVolume className="icon" />
          <p className="info roboto-black-italic">
            <strong className="method-name roboto-black">Phone</strong>
            <strong className="method-info">
              Call us For any Query or Problem
            </strong>
            <span>+201555187487</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default ContactMethods;
