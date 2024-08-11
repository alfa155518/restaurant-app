import { useContext, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { TbWriting } from "react-icons/tb";
import LazyLoad from "react-lazyload";
import OrderChart from "../charts/orderCharts";
import Loader from "../components/loader";
import ScrollToTop from "../components/scrollToTop";
import "../sass/pages/order-management.css";
import { orderContext } from "../context/orderManagement";

function OrderManagement() {
  // Order Context
  const {
    orderProducts,
    getAllOrderProducts,
    loading,
    updateOrderStatus,
    deleteOrder,
  } = useContext(orderContext);

  // get all order products
  useEffect(() => {
    getAllOrderProducts();
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="order-management-container">
          {orderProducts.length <= 0 ? (
            <h2 className="empty-data">There Is No Longer Orders</h2>
          ) : (
            <>
              <table>
                <thead>
                  <tr>
                    <th>img</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Total Price</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Customer Name</th>
                    <th>Customer Phone</th>
                    <th>Customer Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orderProducts.map((order) => {
                    return (
                      <tr key={order._id}>
                        <td className="product-img">
                          <LazyLoad>
                            <img
                              src={require(`../images/${
                                order.product.image.startsWith("popular")
                                  ? "popular"
                                  : "menu"
                              }/${order.product.image}`)}
                              alt="product-img"
                            />
                          </LazyLoad>
                        </td>
                        <td className="name  roboto-black">
                          {order.product.name}
                        </td>
                        <td className="description roboto-black-italic">
                          {order.product.description}
                        </td>
                        <td className="price">
                          $
                          {order.quantity *
                            parseInt(order.product.price.replace(/\$/g, ""))}
                        </td>
                        <td className="quantity">{order.quantity}</td>
                        <td className="status">
                          <span
                            style={{
                              backgroundColor:
                                order.orderStatus === "confirmed" &&
                                `rgb(76, 175, 80)`,
                            }}>
                            {order.orderStatus}
                          </span>
                        </td>
                        <td className="customer-name">
                          <span>{order.customer.firstName}</span>
                        </td>
                        <td className="customer-phone">
                          <span>{order.customer.phone}</span>
                        </td>
                        <td className="customer-email">
                          <span>{order.customer.email}</span>
                        </td>
                        <td className="actions">
                          <button
                            className="delete"
                            onClick={(e) => deleteOrder(e, order)}>
                            <FaTrashAlt />
                          </button>
                          <button
                            onClick={(e) => updateOrderStatus(e, order)}
                            className={`update ${
                              order.orderStatus === "confirmed" &&
                              "banned-click "
                            }`}>
                            <TbWriting />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <OrderChart />
            </>
          )}
        </section>
      )}
      <ScrollToTop />
    </>
  );
}

export default OrderManagement;
