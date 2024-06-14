import useObserver from "../hooks/useObserver";

function ContactForm() {
  const [ref, inView] = useObserver();
  return (
    <>
      <h4 className="section-name">
        I would Love to hear from <strong>You</strong>
        <p className="text">
          Share your experience about using this app by sending us a message!
        </p>
      </h4>
      <form
        ref={ref}
        className={`contact-form ${
          inView ? "animate__animated animate__fadeInDownBig  show" : ""
        }`}>
        <div className="form-group">
          <input
            className="default-input"
            type="text"
            name="first-name"
            id="first-name"
            placeholder="First Name"
            required
            autoComplete="any name"
          />
          <input
            className="default-input"
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Last Name"
            required
            autoComplete="any name"
          />
        </div>
        <div className="form-group">
          <input
            className="default-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            autoComplete="email any thing"
          />
          <input
            className="default-input"
            type="tel"
            name="phone"
            id="phone"
            autoComplete="phone any thing"
            placeholder="Phone"
          />
        </div>
        <textarea name="message" placeholder="Enter Your Message"></textarea>
        <button type="submit" className="send-data">
          Send Message
        </button>
      </form>
    </>
  );
}

export default ContactForm;
