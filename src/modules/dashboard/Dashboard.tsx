import React, { useContext } from "react";
import { FoodItems } from "../../appInterface";
import { DataContext } from "../../context/DataProvider";
import "./Dashboard.css";

function Dashboard() {
  const { topRated, allCategories, dishesNearYou } = useContext(DataContext);
  return (
    <div className="wrapper">
      {/* Header */}
      <div className="content">
        <div className="container mb-5">
          <h4 className="my-4 fw-600 d-blue">Top rated</h4>
          <div className="row">
            {topRated.map((items: FoodItems, idx: number) => (
              <div key={idx} className="col-md-4 pointer">
                <img
                  src={items.url}
                  width="300px"
                  height="300px"
                  style={{ borderRadius: 15 }}
                  alt="icon"
                />
                <h5 className="fw-600 black">{items.name}</h5>
              </div>
            ))}
          </div>
          <h4 className="my-4 fw-600 d-blue">All Categories</h4>
          <div className="row">
            {allCategories.map((items: FoodItems, idx: number) => (
              <div key={idx} className="col-md-4 pointer">
                <img
                  src={items.url}
                  width="300px"
                  height="300px"
                  style={{ borderRadius: 15 }}
                  alt="icon"
                />
                <h5 className="fw-600 black">{items.name}</h5>
              </div>
            ))}
          </div>
          <h4 className="my-4 fw-600 d-blue">Dishes Near You</h4>
          <div className="row">
            {dishesNearYou.map((items: FoodItems, idx: number) => (
              <div key={idx} className="col-md-4 pointer">
                <img
                  src={items.url}
                  width="300px"
                  height="300px"
                  style={{ borderRadius: 15 }}
                  alt="icon"
                />
                <h5 className="fw-600 black">{items.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
