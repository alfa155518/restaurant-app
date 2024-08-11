import useObserver from "../hooks/useObserver";
import Loader from "../components/loader";
import ScrollToTop from "../components/scrollToTop";
import useContactUs from "../hooks/useContactUs";

function ContactForm() {
  const [ref, inView] = useObserver();

  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    message,
    setMessage,
    handleSubmitMessage,
    loading,
  } = useContactUs();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h4 className="section-name">
            I would Love to hear from <strong>You</strong>
            <p className="text">
              Share your experience about using this app by sending us a
              message!
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
                name="firstName"
                id="firstName"
                placeholder="First Name"
                required
                autoComplete="any name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="default-input"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                required
                autoComplete="any name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="default-input"
                type="tel"
                name="phone"
                id="phone"
                autoComplete="phone any thing"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <textarea
              name="message"
              placeholder="Enter Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}></textarea>
            <button
              type="submit"
              className="send-data"
              onClick={(e) => handleSubmitMessage(e)}>
              Send Message
            </button>
          </form>
        </>
      )}
      <ScrollToTop />
    </>
  );
}

export default ContactForm;
