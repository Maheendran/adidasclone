import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Singlepage.css";
export const Singlepage = ({ handleAddproduct }) => {
  const param = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/products/${param.cart_id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  });
  console.log(param, "iam param");

  // ........................

  return (
    <>
      <div className="main-single-page">
        <div className="left-img">
          <img src={data.img} alt="" />
        </div>
        <div className="right-section">
          <h1>{data.title}</h1>
          <h1>₹{data.price}.00</h1>
          <p style={{ "text-decoration": "line-through" }}>₹{data.offprice}</p>
          <p>Offer : {data.offer}</p>
          <p>{data.type}.Orginal</p>
          <button onClick={() => handleAddproduct(data)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};
