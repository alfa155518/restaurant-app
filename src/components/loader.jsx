
import {ThreeCircles} from "react-loader-spinner"
import "../sass/components/loader.css"

function Loader() {
  return (
    <div className="container-loader">
      <ThreeCircles
        visible={true}
        height="200"
        width="180"
        color="rgb(255 204 0 / 1)"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass="loader-content"
        />
    </div>
  )
}

export default Loader