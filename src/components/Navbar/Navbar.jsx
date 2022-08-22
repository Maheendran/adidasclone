import React from "react";
import "./Navbar.css";
import { AiOutlineMenu, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase";
import { BsBag } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { Account } from "../Account";

export const Navbar = ({ cartitems }) => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <div className="navbar">
        <div className="top-nav">
          <ul>
            <li> SIGN UP TO ADICLUB & GET 15% OFF</li>
            <li>FREE DELIVERY FOR ALL ORDERS NOW</li>
            <li>FREE RETURNS</li>
          </ul>
        </div>
        <div className="bot-nav">
          <div className="right-mid-nav">
            <ul>
              <li> help</li>
              <li>returns</li>
              <li>order tracker</li>
              <li>sign up</li>
            </ul>
          </div>

          <div className="bottom-nav">
            <nav>
              <input type="checkbox" id="check" />
              <label for="check" className="checkbtns">
                <AiOutlineMenu />
              </label>
              <label className="logo">
                <NavLink to="/">
                  <img
                    src="https://th.bing.com/th/id/R.64fdbebebbe1b3cbbac4abde3d640d5a?rik=r81u5Q2UFMK9vQ&riu=http%3a%2f%2flogok.org%2fwp-content%2fuploads%2f2014%2f03%2fAdidas-logo-black.png&ehk=0NN371%2fo9JBi3FjSBe%2bNPblhqZH1LtCHYdUM%2bvOfkKQ%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                </NavLink>
              </label>

              <ul>
                <Link to="/Mens">
                  <li>MEN</li>
                </Link>
                <Link to="/Women">
                  <li>WOMEN</li>
                </Link>
                <Link to="/Kids">
                  <li>KIDS</li>
                </Link>
                <li>SPORTS</li>
                <li>BRANDS</li>
                <li>COLLECTIONS</li>
                <li>OUTLET</li>
              </ul>
            </nav>

            <div className="right-nav-searchbar">
              <input type="text" placeholder="Search" />
              <AiOutlineSearch size={"20px"} style={{ marginLeft: "-19px" }} />
              <Account user={user} />
              <AiOutlineHeart
                size={"25px"}
                style={{ marginLeft: "10px", fontWeight: "800" }}
              />
              <Link to="/cart">
                <BsBag
                  size={"23px"}
                  style={{ marginLeft: "10px", fontWeight: "800" }}
                />{" "}
                <span>{cartitems.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
