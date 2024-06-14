
import "../sass/pages/add-product.css";

function AddProduct() {
  return (
    <form>
      <h2 className="roboto-black">Add Product Page</h2>
      <div className="form-container">
            <>
            <label htmlFor="image" className=" roboto-bold">Upload Img</label>
            <input
              className="default-input"
              type="file"
              id="image"
              placeholder="image"
              required
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
            />
            <input
              className="default-input"
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              required
              autoComplete="Price any thing"
            />
            <input
              className="default-input"
              type="text"
              name="desc"
              id="desc"
              autoComplete="desc any thing"
              placeholder="Description"
            />
            <select className="roboto-bold-italic">
              <option value="type">type</option>
              <option value="pizza">pizza</option>
              <option value="burger">burger</option>
              <option value="drinks">drinks</option>
              <option value="combes">combes</option>
              <option value="sandwich">sandwich</option>
              <option value="pasta">pasta</option>
              <option value="fries">fries</option>
            </select>
          </div>
          <button type="submit" className="send-data" aria-label="send data">
            Add Product
          </button>
    </form>
  )
}

export default AddProduct
