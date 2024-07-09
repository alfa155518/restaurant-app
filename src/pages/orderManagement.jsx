import LazyLoad from "react-lazyload";
import OrderChart from "../charts/orderCharts";
import "../sass/pages/order-management.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/loader";
import ScrollToTop from "../components/scrollToTop";

function OrderManagement() {
  const [orderProducts, setOrderProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllOrderProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8000/api/v1/orders/", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      const data = await response.data.orders;
      setOrderProducts(() => {
        return [...data];
      });
      console.log(data);
    } catch (err) {
      console.error("Failed to fetch order products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllOrderProducts();
  }, []);

  console.log(orderProducts);
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
                  </tr>
                </thead>
                <tbody>
                  {orderProducts.map((product) => {
                    return product.order.map((order) => {
                      return (
                        <tr key={order._id}>
                          <td className="product-img">
                            <LazyLoad>
                              <img
                                src={require(`../images/${
                                  order.image.startsWith("popular")
                                    ? "popular"
                                    : "menu"
                                }/${order.image}`)}
                                alt="product-img"
                              />
                            </LazyLoad>
                          </td>
                          <td className="name  roboto-black">{order.name}</td>
                          <td className="description roboto-black-italic">
                            {order.description}
                          </td>
                          <td className="price">{order.totalPrice}</td>
                          <td className="quantity">{order.quantity}</td>
                          <td className="status">
                            <span>{product.status}</span>
                          </td>
                        </tr>
                      );
                    });
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
