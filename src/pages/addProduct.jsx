import ScrollToTop from "../components/scrollToTop";
import Loader from "../components/loader";
import "../sass/components/add-any-thing.css";
import useAddProduct from "../hooks/useAddProduct";

function AddProduct() {
  // Costume Hook for adding product
  const {
    handleSubmitAddProduct,
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    image,
    setImage,
    category,
    setCategory,
    loading,
  } = useAddProduct();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <form>
          <h2 className="roboto-black">Add Product Page</h2>
          <div className="form-container">
            <>
              <input
                className="default-input"
                type="text"
                id="image"
                placeholder="enter your just End of image: pizza-1.WebP"
                required
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </>
            <input
              autoFocus
              className="default-input"
              type="text"
              name="product-name"
              id="product-name"
              placeholder="Product Name"
              required
              autoComplete="any name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="default-input"
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              required
              autoComplete="Price any thing"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              className="default-input"
              type="text"
              name="desc"
              id="desc"
              autoComplete="desc any thing"
              placeholder="Description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <select
              className="roboto-bold-italic"
              value={category}
              onChange={(e) => setCategory(e.target.value)}>
              <option value="type">type</option>
              <option value="pizza">pizza</option>
              <option value="burgers">burger</option>
              <option value="drinks">drinks</option>
              <option value="combes">combes</option>
              <option value="sandwiches">sandwich</option>
              <option value="pasta">pasta</option>
              <option value="fries">fries</option>
            </select>
          </div>
          <button
            type="submit"
            className="send-data"
            aria-label="send data"
            onClick={(e) => handleSubmitAddProduct(e)}>
            Add Product
          </button>
        </form>
      )}
      <ScrollToTop />
    </>
  );
}

export default AddProduct;
