import Loader from "../components/loader";
import ScrollToTop from "../components/scrollToTop";
import useUpdateProduct from "../hooks/useUpdateProduct";

function UpdateProduct() {
  // Costume Hook For Update Product
  const {
    handleUpdateProduct,
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    loading,
  } = useUpdateProduct();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <form>
          <div className="form-container">
            <div className="form-group">
              <input
                className="default-input"
                type="text"
                name="name"
                id="name"
                placeholder="Product Name"
                required
                autoComplete="any name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="default-input"
                type="text"
                name="description"
                id="description"
                placeholder="description...."
                required
                autoComplete="any description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="default-input"
                type="text"
                name="price"
                id="price"
                placeholder="$15"
                required
                autoComplete="price any thing"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="send-data"
              onClick={(e) => handleUpdateProduct(e)}>
              Update Product
            </button>
          </div>
        </form>
      )}
      <ScrollToTop />
    </>
  );
}

export default UpdateProduct;
