import { Link } from "react-router-dom"
import { FaArrowAltCircleLeft } from "react-icons/fa";
function EmptyData({page, link}) {
  return (
    <div className="empty-data roboto-black">
      <strong>
        <Link to={link}>
          <FaArrowAltCircleLeft className="icon"/>
        </Link>
        </strong>
        Go To {page} To Add Products
    </div>
  )
}

export default EmptyData
