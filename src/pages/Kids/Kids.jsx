import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Kids.css";

export const Kids = ({ handleAddproduct }) => {
  const [kidsdata, setKidsdata] = useState([]);
  const fetching = async () => {
    try {
      let data = await fetch(`http://localhost:8080/products/?type=kids`);
      data = await data.json();

      setKidsdata(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetching();
  }, []);
  // ............................
  function handleSort(nameBy, order) {
    if (nameBy === "title" && order === 1)
      setKidsdata((prev) => [
        ...prev.sort((a, b) => (a.title > b.title ? 1 : -1)),
      ]);
    else if (nameBy === "title" && order === -1)
      setKidsdata((prev) => [
        ...prev.sort((a, b) => (a.title > b.title ? -1 : 1)),
      ]);
    else if (nameBy === "price" && order === 1)
      setKidsdata((prev) => [
        ...prev.sort((a, b) => (a.price > b.price ? 1 : -1)),
      ]);
    else if (nameBy === "price" && order === -1)
      setKidsdata((prev) => [
        ...prev.sort((a, b) => (a.price > b.price ? -1 : 1)),
      ]);
  }
  return (
    <div className="container">
      <div className="kid-first-head">
        <ul>
          <li>BACK</li>
          <li>Home</li>
          <li>Kids</li>
          <li>New arrivals</li>
        </ul>
        <h1>KIDS' NEW ARRIVALS </h1>
        <div className="kid-head-bottom">
          <ul>
            <li>All Kids</li>/<li>Shoes</li>/<li>Clothing</li>/
            <li>Accessories</li>
          </ul>

          <div>
            <input type="checkbox" id="check" />
            <div className="filter-btn">
              <button onClick={() => handleSort("price", 1)}>
                Low to High
              </button>
              <button onClick={() => handleSort("price", -1)}>
                High to low
              </button>
              <button onClick={() => handleSort("title", 1)}>A to Z</button>
              <button onClick={() => handleSort("title", -1)}>Z to A</button>
            </div>
          </div>
        </div>
      </div>
      {/* ............ */}
      <div className="men-prod-grid">
        {kidsdata.map((items) => {
          return (
            <div key={items.id} className="men-pro-div">
              <div>
                <NavLink to={`/detailpage/${items.id}`}>
                  <div id="menimage-front">
                    <img src={items.img} alt="" />
                  </div>
                </NavLink>
                <p>{items.title}</p>
                <div className="Price_div">
                  <p
                    style={{ "text-decoration": "line-through", color: "grey" }}
                  >
                    ₹{items.offprice}
                  </p>
                  <h4>₹{items.price}</h4>
                  <h5
                    style={{
                      color: "red",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {items.offer} off{" "}
                    <span>
                      <button onClick={() => handleAddproduct(items)}>
                        Add to Cart
                      </button>
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
