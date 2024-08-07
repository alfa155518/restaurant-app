import { useContext, useState } from "react";
import { contextProduct } from "../context/HandelCart";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import WrapperNav from "../components/wrapperNav";
import Footer from "../layout/footer";
import ScrollToTop from "../components/scrollToTop";
import EmptyData from "../components/emptyData";
import "../sass/pages/cart.css";
import axios from "axios";
import Loader from "../components/loader";
import useNotifiCations from "../hooks/useNotifiCations";

function Cart() {
  let {
    productInCart,
    setProductInCart,
    handelPlusProductNumber,
    handelMinusProductNumber,
    handelDeleteProduct,
    totalPrice,
  } = useContext(contextProduct);
  const [loading, setLoading] = useState(false);
  const [notify] = useNotifiCations("success", "Done ");
  // Post all product in cart to db
  const handelByProducts = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/v1/orders/addOrder",
        { order: productInCart },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.data;
      if (data.status === "success") {
        localStorage.removeItem("productInCart");
        notify();
        return setProductInCart([]);
      }
      console.log(data);
    } catch (error) {
      console.error("Error adding products to cart:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <WrapperNav sectionName={"Cart"} />
          <section className="cart-container">
            {productInCart.length > 0 ? (
              <>
                <table>
                  <thead>
                    <tr>
                      <th>Remove</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productInCart.map((product, i) => {
                      return (
                        <tr key={i}>
                          <td
                            className="remove-product"
                            onClick={() => handelDeleteProduct(product)}>
                            <FaTrashAlt />
                          </td>
                          <td className="product-img">
                            {product.image.includes("/restaurant") ? (
                              <img
                                src={require(`../images/menu/default-image.WebP`)}
                                alt="product-img"
                              />
                            ) : (
                              <img
                                src={require(`../images/${
                                  product.image.startsWith("popular")
                                    ? "popular"
                                    : "menu"
                                }/${product?.image}`)}
                                alt="product-img"
                              />
                            )}
                          </td>
                          <td className="name roboto-black ">{product.name}</td>
                          <td className="price">{`$${product.price.replace(
                            /\$/g,
                            ""
                          )}`}</td>
                          <td className="quantity">
                            <span
                              className="plus"
                              onClick={() => handelPlusProductNumber(product)}>
                              <CiCirclePlus className="icon" />
                            </span>
                            <span className="quantity-num">
                              {product.quantity}
                            </span>
                            <span
                              className={`minus ${
                                product.quantity <= 1 ? "banned-click" : ""
                              }`}
                              onClick={() => handelMinusProductNumber(product)}>
                              <CiCircleMinus className="icon" />
                            </span>
                          </td>
                          <td className="total">{`$${(
                            +product.price.replace(/\$/g, "") * product.quantity
                          ).toFixed(3)}`}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="total-price">
                  Total Price:
                  <span>{`$${totalPrice.toFixed(3)}`}</span>
                </div>
                <button
                  className="send-data  roboto-black"
                  onClick={(e) => handelByProducts(e)}>
                  By Now
                </button>
              </>
            ) : (
              <EmptyData page={"Menu"} link={"/menu"} />
            )}
          </section>
          <Footer />
        </>
      )}
      <ScrollToTop />
    </>
  );
}

export default Cart;
