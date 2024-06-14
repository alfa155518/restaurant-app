/* eslint-disable jsx-a11y/img-redundant-alt */
import LazyLoad from "react-lazyload";

import { IoStar } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";
import "../sass/components/product.css";
import { useContext } from "react";
import { contextData } from "../context/HandelProducts";
import { Link } from "react-router-dom";
import useNotifiCations from "../hooks/useNotifiCations";
import { contextProduct } from "../context/HandelCart";

function Product({ products }) {

  const {handelFavorite} = useContext(contextData)
  const [notifySuccess] = useNotifiCations("success","Product Already Added ")

  const {handelAddProduct} = useContext(contextProduct)
  return products.map((product, index) => {
    return (
      <LazyLoad height={200} once={true} key={index}>
        <div className={`product-component`}>
          <div className="favorite" onClick={() => handelFavorite(product,notifySuccess)}>
            <GoHeartFill />
          </div>
          <div className="product-img">
            <img src={product.image} alt="product-image" />
          </div>
          <div className="ratings roboto-black">
            {product.rating === "5" && (
              <>
                <IoStar className="star" />
                <IoStar className="star" />
                <IoStar className="star" />
                <IoStar className="star" />
                <IoStar className="star" />
              </>
            )}
            {product.rating === "4" && (
              <>
                <IoStar className="star" />
                <IoStar className="star" />
                <IoStar className="star" />
                <IoStar className="star" />
                <FaRegStar className="half-star" />
              </>
            )}
            {product.rating === "3" && (
              <>
                <IoStar className="star" />
                <IoStar className="star" />
                <IoStar className="star" />
                <FaRegStar className="half-star" />
                <FaRegStar className="half-star" />
              </>
            )}
          </div>
          <h2 className="name roboto-black">{product.name}</h2>
          <p className="desc roboto-bold-italic">{product.desc}</p>
          <strong className="price roboto-black">{product.price}</strong>
          <ul className="actions">
            <Link to={'/info'}>
            <li className="eye">
                <FaEye />
            </li>
            </Link>
            <li className="cart" onClick={() => handelAddProduct(product)}>
                <BsCart4 />
                <span>Add To Cart</span>
            </li>
          </ul>
        </div>
      </LazyLoad>
    );
  });
}

export default Product;
