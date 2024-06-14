import { Link } from "react-router-dom";
import { IoPeople } from "react-icons/io5";
import { MdPriceCheck } from "react-icons/md";
import { ImBlocked } from "react-icons/im";
import { GrStatusGood } from "react-icons/gr";
import { WiStars } from "react-icons/wi";
import LazyLoad from "react-lazyload";
import tables from "../api/tables";
import "../sass/components/table.css";
function Table() {
  return tables.map((table, i) => {
    return (
      <div className="table" key={i}>
        <div className="table-img">
          <LazyLoad height={200} once={true}>
            <img src={table.image} alt="table-img" />
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
            {table.status === "not-booked" ? (
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
        <Link className="btn" to={`/tables/${table.id}`}>
          Details
        </Link>
      </div>
    );
  });
}

export default Table;
