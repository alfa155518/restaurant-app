import { IoStar } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import LazyLoad from "react-lazyload";
import useObserver from "../hooks/useObserver";
import { useEffect, useState } from "react";
import axios from "axios";

function Reviews({ tableName }) {
  const [ref, inView] = useObserver();
  const [reviews, setReviews] = useState({});
  const [filteredReviews, setFilteredReviews] = useState([]);

  const getAllReviews = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/reviews/");
      const data = await response.data.reviews;
      return setReviews(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllReviews();
  }, [setReviews]);

  useEffect(() => {
    if (JSON.stringify(reviews) !== "{}") {
      const filtered = reviews.filter((rev) => rev.tableName === tableName);
      return setFilteredReviews(filtered);
    }
  }, [reviews]);
  if (JSON.stringify(reviews) !== "{}") {
    console.log(filteredReviews);
  }
  return (
    <div
      ref={ref}
      className={`reviews ${
        inView ? "animate__animated animate__fadeInDown" : ""
      }`}>
      {JSON.stringify(reviews) !== "{}" &&
        filteredReviews?.map((review, i) => {
          return (
            <div className="review" key={i}>
              <LazyLoad height={200} once={true}>
                <div className="user-img">
                  <img src={review.reviewer.photo.url} alt="user-img" />
                </div>
              </LazyLoad>
              <h3 className="reviewer-name roboto-black ">{review.reviewer.firstName}</h3>
              <div className="details">{review.review}</div>
              <ul className="ratings">
                {review?.rating === "5" && (
                  <li>
                    <IoStar className="star" />
                    <IoStar className="star" />
                    <IoStar className="star" />
                    <IoStar className="star" />
                    <IoStar className="star" />
                  </li>
                )}
                {review?.rating === "4" && (
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
  );
}

export default Reviews;
