import { IoStar } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import review_img from "../images/feedback.WebP";
import "../sass/sections/feedback.css";
import { useInView } from "react-intersection-observer";

function Feedback() {
  const { ref, inView } = useInView();
  return (
    <>
      <h2 className="section-name">
        Our Customers <strong>Feedbacks</strong>
        <p className="text roboto-bold-italic ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero atque
          itaque nihil odio neque doloribus, tenetur
        </p>
      </h2>
      <section
        ref={ref}
        className={`feedback-container ${
          inView ? "animate__animated animate__zoomIn show" : ""
        }`}>
        <div className="boxes">
          <div className="box">
            <ul className="rating">
              <li>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </li>
            </ul>
            <article className="review roboto-light">
              Food Grill has become my family's favorite fast food joint. The
              wide variety of options on their menu keeps everyone happy, from
              burgers to salads. The quality of the food is consistently
              excellent, and the service is top-notch. We always leave satisfied
              and will keep coming back for more.
            </article>
            <h3 className="reviewer roboto-black-italic">Jon Doe</h3>
            <div className="review-img">
              <img src={review_img} alt="review-img" />
            </div>
          </div>
          <div className="box">
            <ul className="rating">
              <li>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <FaRegStar />
              </li>
            </ul>
            <article className="review roboto-light">
              Food Grill is a go-to for me and my coworkers during lunch breaks.
              We love the diverse menu, offering something for every taste, from
              juicy burgers to fresh salads. The food quality is reliably
              top-notch, and the staff is always efficient. It's our preferred
              choice for quick, tasty meals.
            </article>
            <h3 className="reviewer roboto-black-italic">Sarah Taylor</h3>
            <div className="review-img">
              <img src={review_img} alt="review-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feedback;
