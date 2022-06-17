import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FoodItems } from "../../appInterface";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import { DataContext } from "../../context/DataProvider";
import "./FoodDetails.css";
interface Location<T> {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: T;
}

function FoodDetails() {
  const { state } = useLocation() as Location<FoodItems>;
  const { addToCart, removeItem } = useContext(DataContext);
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };

  const addItemToCart = () => {
    addToCart(state);
  };
  const removeItemFromCart = () => {
    removeItem(state);
  };

  return (
    <div className="d-flex food-details-outer">
      <Header />
      <div className="food-details">
        <div className="container mb-5">
          <div className="container mb-5">
            <h4 className="my-4 fw-600">Add Item to cart</h4>
            <div className="row">
              <div className="col-md-4" style={{ cursor: "pointer" }}>
                <img
                  src={state.url}
                  width="300px"
                  height="300px"
                  style={{ borderRadius: 15 }}
                  alt="icon"
                />
              </div>
              <div className="col-md-4" style={{ cursor: "pointer" }}>
                <h5 className="my-4 fw-600">Name: {state.name}</h5>
                <h5 className="my-4 fw-600">Price: {state.price}</h5>
                <h5 className="my-4 fw-600">Description: {state.desc}</h5>
                <h5 className="my-4 fw-600">Rating: {state.rate} *</h5>
                <div>
                  <button className="btn btn-primary" onClick={goToCart}>
                    Go to Cart
                  </button>
                  <button
                    className="mx-3 btn btn-success"
                    onClick={addItemToCart}
                  >
                    Add Item
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={removeItemFromCart}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FoodDetails;
