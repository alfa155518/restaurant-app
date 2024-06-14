import { IoStar } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { MdPriceCheck } from "react-icons/md";
import { ImBlocked } from "react-icons/im";
import { GrStatusGood } from "react-icons/gr";
import { WiStars } from "react-icons/wi";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useObserver from "../hooks/useObserver";
import Tables from "../api/tables";
import Reviews from "../api/reviews";
import OurChefs from "../sections/chefs";
import SwipperSlider from "../components/swipper";
import LazyLoad from "react-lazyload";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/scrollToTop";
import Footer from "../layout/footer";
import "../sass/pages/table-info.css";
import { contextTable } from "../context/manageTable";
function TableInfo() {
  const { infoId } = useParams();
  const [table, setTable] = useState({});
  const [reviews] = useState(Reviews);
  const [ref, inView] = useObserver();
  const {bookingTable} = useContext(contextTable)
  // Find Table By ID
  useEffect(() => {
    const foundTable = Tables.find((table) => table.id === +infoId);
    setTable(foundTable);
  }, [table, infoId]);

  // Destructed Table
  const { name, imageCover, images, people, price, rating, status, summary } =
    table;

  // Filter By Table Name
  let filteredReviews = reviews.filter((review) => {
    return review.table === name;
  });

  return (
    <>
      <NavBar />
      <section className="table-info-container">
        <div className="image-cover">
          <span className="table-name roboto-black">{name}</span>
          <img src={imageCover} alt="cover-img" />
        </div>
        <div className="details">
          <div className="desorption">
            <h2 className="name roboto-black-italic">About The {name}</h2>
            <div className="summary">{summary}</div>
            <article>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              optio dolores ipsum earum nemo, quis voluptas. Doloremque commodi
              voluptate, molestias fugit, est labore provident voluptas suscipit
              veritatis cumque accusantium nemo mollitia ducimus libero, sint
              quibusdam laborum soluta nobis perspiciatis omnis.
            </article>
          </div>
          <div className={`info`}>
            <h3 className="roboto-black-italic">QUICK FACTS</h3>
            <span className="people">
              individuals: {people} <IoPeople className="icon" />
            </span>
            <span className="rating">
              Rating: {rating} <WiStars className="icon" />
            </span>
            <span className="price">
              Price: {price} <MdPriceCheck className="icon" />
            </span>
            <span className="status">
              {status === "not-booked" ? (
                <>
                  Not-booked
                  <GrStatusGood className="icon" />
                </>
              ) : (
                <>
                  Was-booked
                  <ImBlocked className="icon" />
                </>
              )}
            </span>
          </div>
        </div>
        <div className="chefs-wrapper">
          <OurChefs />
        </div>
        <div className="table-images">
          <h5 className="roboto-black-italic">Table Images</h5>
          <SwipperSlider arrayImages={images} />
        </div>
        <>
          <h6>User Reviews</h6>
          <div ref={ref}
            className={`reviews ${
              inView ? "animate__animated animate__fadeInDown" : ""}`}
            >
            {filteredReviews?.map((review, i) => {
              return (
                <div className="review" key={i}>
                  <LazyLoad height={200} once={true}>
                    <div className="user-img">
                      <img src={review.user} alt="user-img" />
                    </div>
                  </LazyLoad>
                  <div className="details">{review.review}</div>
                  <ul className="ratings">
                    {review?.rating === 5 && (
                      <li>
                        <IoStar className="star" />
                        <IoStar className="star" />
                        <IoStar className="star" />
                        <IoStar className="star" />
                        <IoStar className="star" />
                      </li>
                    )}
                    {review?.rating === 4 && (
                      <li>
                        <IoStar className="star" />
                        <IoStar className="star" />
                        <IoStar className="star" />
                        <IoStar className="star" />
                        <FaRegStar className="half-star" />
                      </li>
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        </>
        <div className="booking-table">
          <div className="table-image">
            <img src={imageCover} alt="img" />
          </div>
          <div className="about-booking">
            <strong className="roboto-black">WHAT ARE YOU WAITING FOR?</strong>
            <p className="roboto-light-italic">
              Hurry up and reserve your table so you don't regret it
            </p>
          </div>
          <div className="btn-booking" onClick={() => bookingTable(table)}>
            <span className="roboto-black">Book Table Now!</span>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default TableInfo;
