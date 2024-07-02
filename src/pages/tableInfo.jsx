import axios from "axios";
import { IoPeople } from "react-icons/io5";
import { MdPriceCheck } from "react-icons/md";
import { ImBlocked } from "react-icons/im";
import { GrStatusGood } from "react-icons/gr";
import { WiStars } from "react-icons/wi";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow } from "swiper/modules";
import OurChefs from "../sections/chefs";
import LazyLoad from "react-lazyload";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/scrollToTop";
import Footer from "../layout/footer";
import { contextTable } from "../context/manageTable";
import Loader from "../components/loader";
import Reviews from "../components/reviews";
import "../sass/pages/table-info.css";

function TableInfo() {
  // Get Single Table Id from URL
  const { infoId } = useParams();

  // Handel Single Table State
  const { table, setTable } = useContext(contextTable);

  // Booking Table State
  const { bookingTable } = useContext(contextTable);

  // Get Single Table Data
  const getSingleData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/tables/${infoId}`
      );
      const data = await response.data.table;
      await setTable(data);
    } catch (error) {
      console.log("Error fetching table: ", error);
    }
  };

  useEffect(() => {
    getSingleData();
  }, [infoId, setTable]);

  return (
    <>
      <NavBar />

      {JSON.stringify(table) !== "{}" ? (
        <section className="table-info-container">
          <div className="image-cover">
            <span className="table-name roboto-black">{table.name}</span>
            {table.image.includes("/restaurant") ? (
              <img
                src={require(`../images/menu/default-image.WebP`)}
                alt="product-img"
              />
            ) : (
              <img
                src={require(`../images/reserve-tables/${table.image}`)}
                alt="product-img"
              />
            )}
          </div>
          <div className="details">
            <div className="desorption">
              <h2 className="name roboto-black-italic">
                About The {table.name}
              </h2>
              <div className="summary">{table.summary}</div>
              <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam optio dolores ipsum earum nemo, quis voluptas.
                Doloremque commodi voluptate, molestias fugit, est labore
                provident voluptas suscipit veritatis cumque accusantium nemo
                mollitia ducimus libero, sint quibusdam laborum soluta nobis
                perspiciat table.is omnis.
              </article>
            </div>
            <div className={`info`}>
              <h3 className="roboto-black-italic">QUICK FACTS</h3>
              <span className="people">
                individuals: {table.people} <IoPeople className="icon" />
              </span>
              <span className="rating">
                Rating: {table.rating} <WiStars className="icon" />
              </span>
              <span className="price">
                Price: {table.price} <MdPriceCheck className="icon" />
              </span>
              <span className="status">
                {table.status === false ? (
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
            <>
              <LazyLoad height={200} once={true}>
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  // loop={true}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  modules={[EffectCoverflow]}>
                  {table?.images?.map((imgSrc, i) => {
                    return (
                      <SwiperSlide key={i}>
                        {table.images[0].includes("/restaurant") ? (
                          <img
                            src={require(`../images/menu/default-image.WebP`)}
                            alt="product-img"
                          />
                        ) : (
                          <img
                            src={require(`../images/reserve-tables/${imgSrc}`)}
                            alt="product-img"
                          />
                        )}
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </LazyLoad>
            </>
          </div>
          <>
            <h6>User Reviews</h6>
            <Reviews tableName={table.name} />
          </>
          <div className="booking-table">
            <div className="table-image">
              {table.image.includes("/restaurant") ? (
                <img
                  src={require(`../images/menu/default-image.WebP`)}
                  alt="product-img"
                />
              ) : (
                <img
                  src={require(`../images/reserve-tables/${table.image}`)}
                  alt="product-img"
                />
              )}
            </div>
            <div className="about-booking">
              <strong className="roboto-black">
                WHAT ARE YOU WAITING FOR?
              </strong>
              <p className="roboto-light-italic">
                Hurry up and reserve your table so you don't regret it
              </p>
            </div>
            <div
              className={`${table.status ? "banned-click" : ""} btn-booking`}
              onClick={() => bookingTable(table)}>
              <span className="roboto-black">Book Table Now!</span>
            </div>
          </div>
        </section>
      ) : (
        <Loader />
      )}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default TableInfo;
