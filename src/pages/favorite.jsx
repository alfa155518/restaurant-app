import { BsCart4 } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { useContext } from "react"
import { contextData } from "../context/HandelProducts"
import EmptyData from "../components/emptyData"
import ScrollToTop from "../components/scrollToTop"
import WrapperNav from "../components/wrapperNav"
import Footer from "../layout/footer"
import "../sass/pages/favorite.css"
import LazyLoad from "react-lazyload";
import { contextProduct } from "../context/HandelCart";
function Favorite() {
  const {favoriteProducts = [],handelRemoveProduct} = useContext(contextData)
  const {handelAddProduct} = useContext(contextProduct)
  
  return (
    <>
    <WrapperNav sectionName={"Favorites"}/>
    <section className="favorite-container p-relative">
      {
        favoriteProducts.length === 0 ?  <EmptyData page={"Menu"} link={'/menu'}/> :
        <div className="favorites-products">
          {
            favoriteProducts.map((product, i) => {
              return (
                <LazyLoad height={200} once={true} key={i}>
                <div  className="product">
                  <div className="product-img">
                    <img src={product.image} alt="product-img" />
                  </div>
                  <h3 className="product-name roboto-black">{product.name}</h3>
                  <article className="description roboto-black">
                    {product.desc}
                  </article>
                  <strong className="price">
                    {product.price}
                  </strong>
                  <div className="actions roboto-medium-italic">
                    <span className="add-to-cart" onClick={() => handelAddProduct(product)}>Add <BsCart4 className="icon"/></span>
                    <span className="remove-product" onClick={() => handelRemoveProduct(product)}>Remove <FaTrashAlt className="icon"/></span>
                  </div>
            </div>
                </LazyLoad>
          )
        })
      }
        </div>
      }
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}
export default Favorite