import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

export const Cart = ({
  cartitems,
  handleAddproduct,
  handleRemoveproduct,
  handlecartRemoveproduct,
}) => {
  const getcart = JSON.parse(localStorage.getItem("newcart"));
  const totalPrice = getcart.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div>
      <div>
        <div> </div>
        {cartitems.length === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "-50px",
            }}
          >
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"
              alt=""
            />
            <div>
              <h1 style={{ fontSize: "25px", fontWeight: "bold" }}>
                No items added in the cart
              </h1>
              <Link to="/">
                <button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "0.5rem",
                  }}
                >
                  GET ITEMS
                </button>{" "}
              </Link>
            </div>
          </div>
        ) : (
          <div className="cart_main_div">
            <div className="products_div">
              {cartitems.map((items) => {
                return (
                  <div key={items.id} className="product">
                    <div id="image">
                      <img src={items.img} alt={items.title} />
                    </div>
                    <div id="nameprice">
                      <p>{items.title}</p>
                      <p>₹{items.price}</p>
                    </div>
                    <div id="buttoncart">
                      <button onClick={() => handleAddproduct(items)}>+</button>
                      <p>
                        {items.quantity}*{items.price}
                      </p>
                      <button onClick={() => handleRemoveproduct(items)}>
                        -
                      </button>
                    </div>
                    <button onClick={() => handlecartRemoveproduct(items)}>
                      REMOVE
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="ordersummery">
              <div className="ckeckbuton">
                <button>CHECK0UT </button>
              </div>
              <div className="summerydetail">
                <h1>ORDER SUMMARY</h1>
                <div>
                  <p>{cartitems.length} ITEMS</p>
                  <p> ₹{totalPrice}</p>
                </div>
                <div>
                  <p>DELIVERY</p>
                  <p>FREE</p>
                </div>
                <div>
                  <p>TOATAL: </p>
                  <p>₹{totalPrice}</p>
                </div>

                <input type="text" placeholder="Enter yout promo code" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
