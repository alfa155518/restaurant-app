
import LazyLoad from "react-lazyload"
import OrderChart from "../charts/orderCharts"
import "../sass/pages/order-management.css"

function OrderManagement() {
  const orderProducts = JSON.parse(localStorage.getItem("productInCart")) || []
  return (
    <section className="order-management-container">
      {
        orderProducts.length <= 0 ? <h2 className="empty-data">There Is No Longer Orders</h2> :
        <>
    <table>
      <thead>
        <tr>
          <th>img</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Status</th>
          <th>Type</th>
        </tr>
      </thead>
        <tbody>
          {orderProducts.map((product, i) => {
            return (
              <tr key={i}>
                <td className="product-img">
                  <LazyLoad>
                  <img src={product.image} alt="product-img" />
                  </LazyLoad>
                </td>
                <td className="name  roboto-black">{product.name}</td>
                <td className="description roboto-black-italic">{product.desc}</td>
                <td className="price">{`$${+product.price.replace(/\$/g, '') * product.quantity} `}</td>
                <td className="quantity">{product.quantity}</td>
                <td className="status"><span>Pending</span></td>
                <td className="type roboto-black">{product.type}</td>
              </tr>
            )
          })}
        </tbody>
    </table>
    <OrderChart/>
  </>
  }
    </section>
  )
}

export default OrderManagement
