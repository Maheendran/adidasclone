import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Women.css";
export const Women = ({ handleAddproduct }) => {
  const [womendata, setWomendata] = useState([]);
  const fetching = async () => {
    try {
      let data = await fetch(`http://localhost:8080/products/?type=women`);
      data = await data.json();

      setWomendata(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetching();
  }, []);
  // ......................
  function handleSort(nameBy, order) {
    if (nameBy === "title" && order === 1)
      setWomendata((prev) => [
        ...prev.sort((a, b) => (a.title > b.title ? 1 : -1)),
      ]);
    else if (nameBy === "title" && order === -1)
      setWomendata((prev) => [
        ...prev.sort((a, b) => (a.title > b.title ? -1 : 1)),
      ]);
    else if (nameBy === "price" && order === 1)
      setWomendata((prev) => [
        ...prev.sort((a, b) => (a.price > b.price ? 1 : -1)),
      ]);
    else if (nameBy === "price" && order === -1)
      setWomendata((prev) => [
        ...prev.sort((a, b) => (a.price > b.price ? -1 : 1)),
      ]);
  }

  return (
    <div className="container">
      <div className="women-first-head">
        <ul>
          <li>BACK</li>
          <li>Home</li>
          <li>Women</li>
          <li>Originals</li>
        </ul>
        <h1>WOMEN'S ADIDAS ORIGINALS </h1>
        <p style={{ fontSize: "10px", color: "grey", marginTop: "10px" }}>
          Our women's adidas Originals range contains all the classic adidas
          clothing that you've come to love over the years. Take a <br /> walk
          down memory lane with our reinvigorated versions of retro icons.
        </p>
        <div className="women-head-bottom">
          <ul>
            <li>All Womens</li>/<li>Shoes</li>/<li>Clothing</li>/
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
        {womendata.map((items) => {
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
