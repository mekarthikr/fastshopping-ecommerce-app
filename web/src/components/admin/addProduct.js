import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct ,loadProducts} from "../../action/productaction";

// import "../../assets/style/register.css";

export default function AddProduct() {
  const [state, setState] = useState({
    name: "",
    imageurl: "",
    color: "",
    price: "",
    category: "",
    description:""
  });

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const { name, imageurl, color, price, category,description } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !imageurl || !color || !price || !category) {

    } 
    else 
    {
      //dispatch(addProduct(state));
      //dispatch(loadProducts());
      
     // navigate("/adminpanel");
    }
  };
  const encodeImageFileAsURL=(element)=> {
    let file = element.files[0];
    let reader = new FileReader();
    reader.onloadend = ()=> {
      console.log('RESULT', reader.result)
    }
    reader.readAsDataURL(file);
    console.log(file)
  };
  return (
    <>
      <div className="edit-product-block bg-blue">
        <h1 className="color-white">Add Product</h1>
        <p className="color-white">Enter the details of the product</p>
        <form onSubmit={handleSubmit} autocomplete="off">
          <div className="row">
            <div className="col">
              <div className="form-group row">
                <label className="color-white">PRODUCT NAME</label>
                <input
                  className="form-control form-input"
                  type={"text"}
                  name="name"
                  value={name || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group row">
                <label className="color-white">IMAGE URL</label>
                <input
                  className="form-control form-input"
                  type={"text"}
                  name="imageurl"
                  value={imageurl || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group row">
                <label className="color-white">PRODUCT COLOR</label>
                <input
                  className="form-control form-input"
                  type={"text"}
                  name="color"
                  value={color || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group row">
                <label className="color-white">PRICE</label>
                <input
                  className="form-control form-input"
                  type={"number"}
                  name="price"
                  value={price || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group row">
                <label className="color-white">CATEGORY</label>
                <select
                  class="form-select form-control"
                  onChange={handleInputChange}
                  name="category"
                >
                  <option  selected value="">
                    Select any category
                  </option>
                  <option value="smartphone">smartphone</option>
                  <option value="laptops">laptops</option>
                  <option value="headphone">headphone</option>
                  <option value="accessories">accessories</option>
                </select>
              </div>
              <div className="form-group row">
                <label className="color-white">DESCRIPTION</label>
                <textarea style={{resize:"none"}}
                rows={5}
                className="form-control form-input"
                type={"text"}
                name="description"
                value={description || ""}
                onChange={handleInputChange}></textarea>
              </div>
            </div>
            <div className="col edit-product-view">
              <div className="bg-blue edit-product-card">
                <img alt="product" src={imageurl} />
                <h3 className="color-white">{name}</h3>
                <p className="color-white">{color}</p>
                <p className="color-white">{price}</p>
              </div>
            </div>
            <div></div>
            <input type="file" name="image" onchange={encodeImageFileAsURL}/>
          </div>
          <button type="submit" className="login-button">
            {" "}
            ADD{" "}
          </button>

        </form>
      </div>
    </>
  );
}
