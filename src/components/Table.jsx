import axios from "axios";
import { Link } from "react-router-dom";
import { IoPeople } from "react-icons/io5";
import { useContext, useEffect } from "react";
import { MdPriceCheck } from "react-icons/md";
import { ImBlocked } from "react-icons/im";
import { GrStatusGood } from "react-icons/gr";
import { WiStars } from "react-icons/wi";
import LazyLoad from "react-lazyload";
import { contextTable } from "../context/manageTable";
import "../sass/components/table.css";
function Table() {
  const { allTables, setAllTables } = useContext(contextTable);

  // Get ALl Tables
  const getAllTables = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/tables");
      const data = await response.data.tables;
      setAllTables(data);
    } catch (err) {
      console.log("Error fetching tables: ", err);
    }
  };
  useEffect(() => {
    getAllTables();
  }, [setAllTables]);

  return allTables.map((table, i) => {
    return (
      <div className="table" key={i}>
        <div className="table-img">
          <LazyLoad height={200} once={true}>
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
          </LazyLoad>
        </div>
        <h3 className="table-name roboto-black">{table.name}</h3>
        <p className="desorption roboto-black-italic">{table.summary}</p>
        <div className="info">
          <span className="people">
            individuals: {table.people} <IoPeople className="icon" />
          </span>
          <span className="rating">
            Rating: ({table.rating}) <WiStars className="icon" />
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
        <Link className="btn" to={`/tables/${table._id}`}>
          Details
        </Link>
      </div>
    );
  });
}

export default Table;
