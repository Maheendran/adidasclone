import React, { useEffect, useState } from "react";
import "./Home.css";
// import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";
// import styled from 'styled-components';
import { NavLink } from "react-router-dom";
export const Home = () => {
  const [popular, setPopular] = useState([]);
  const getpopular = () => {
    fetch(`http://localhost:8080/products`)
      .then((res) => res.json())
      .then((res) => {
        setPopular(res);
      });
  };

  useEffect(() => {
    getpopular();
  });
  return (
    <>
      <div className="main-banner">
        <img
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/YEEZY_450_UTILITY_BLACK-D_tcm209-914750.jpg"
          alt=""
        />

        <span id="banner-heading">
          <h1>
            YEEXY 450 UTILITY <br />
            BLACK
          </h1>
          <br />
          <p>AUGUST 2.</p>
        </span>
        <div className="main-banner-inside"></div>
      </div>
      {/* ..........popular right now............... */}
      <div className="popular-section">
        <h1>POPULAR RIGHT NOW</h1>

        <ul className="pop-ul-li">
          <li>ORIGINALS</li>
          <li>SLIDES</li>
          <li>BAG </li>
          <li>YEEZY</li>
          <li>NMD</li>
        </ul>
      </div>
      <div className="whtshot-container">
        <h1 id="left-h1-tag">WHAT'S HOT</h1>
        <div className="wht-hot-grid">
          <div>
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/fw22-ivp-6-launch-glp-m-tc-d_tcm209-911671.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/Teaser_1050x1400_M_tcm209-911766.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/originals-fw22-always-originals-launch-glp-tc-01-d_tcm209-897640.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <h1 id="left-h1-tag">NEW ARRIVALS</h1>
      <div className="productsecc-main">
        <div className="productsecc">
          {popular.map((e) => {
            return (
              <NavLink to={`/detailpage/${e.id}`}>
                <div className="slide-box">
                  <img src={e.img} alt="" />
                  <p style={{ marginTop: "-25px" }}> ₹ {e.price}</p>
                  <p>{e.title}</p>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
      {/* .......whats hot */}
      <div className="whtshot-container">
        <h1 id="left-h1-tag">WHAT'S HOT</h1>
        <div className="wht-hot-grid">
          <div>
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/fw22-ivp-6-launch-hp-tc-d_tcm209-911780.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/fw22-football-juventus-away-hp-tcc_tcm209-906530.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/TCWalking_tcm209-913876.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* .................. */}
      <h1 id="left-h1-tag">WHO ARE YOU SHOPPING FOR?</h1>
      <div className="productsecc-main">
        <div className="productsecc">
          {popular.map((e) => {
            return (
              <NavLink to={`/detailpage/${e.id}`}>
                <div className="slide-box">
                  <img src={e.img} alt="" />
                  <p style={{ marginTop: "-25px" }}> ₹ {e.price}</p>
                  <p>{e.title}</p>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
      {/* ........................... */}
      <div className="secondlast-container">
        <div>
          <h4>STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949</h4>

          <p>
            Sport keeps us fit. Keeps you mindful. Brings us together. Through
            sport we have the power to change lives. Whether it is through
            stories of inspiring athletes. Helping you to get up and get moving.
            Sportswear featuring the latest technologies, to up your
            performance. Beat your PB. adidas offers a home to the runner, the
            basketball player, the soccer kid, the fitness enthusiast. The
            weekend hiker that loves to escape the city. The yoga teacher that
            spreads the moves. The 3-Stripes are seen in the music scene. On
            stage, at festivals. Our sports clothing keeps you focused before
            that whistle blows. During the race. And at the finish lines. We’re
            here to support creators. Improve their game. Their lives. And
            change the world. <br />
            adidas is about more than sportswear and workout clothes. We partner
            with the best in the industry to co-create. This way we offer our
            fans the sports apparel and style that match their athletic needs,
            while keeping sustainability in mind. We’re here to support
            creators. Improve their game. Create change. And we think about the
            impact we have on our world.
          </p>
        </div>
        <div>
          <h4>WORKOUT CLOTHES, FOR ANY SPORT</h4>

          <p>
            adidas designs for and with athletes of all kinds. Creators, who
            love to change the game. Challenge conventions. Break the rules and
            define new ones. Then break them again. We supply teams and
            individuals with athletic clothing pre-match. To stay focussed. We
            design sports apparel that get you to the finish line. To win the
            match. We support women, with bras and tights made for purpose. From
            low to high support. Maximum comfort. We design, innovate and
            itterate. Testing new technologies in action. On the pitch, the
            tracks, the court, the pool. Retro workout clothes inspire new
            streetwear essentials. Like NMD, Ozweego and our Firebird
            tracksuits. Classic sports models are brought back to life. Like
            Stan Smith. And Superstar. Now seen on the streets and the stages.
            Through our collections we blur the borders between high fashion and
            high performance. Like our adidas by Stella McCartney athletic
            clothing collection – designed to look the part inside and outside
            of the gym. Or some of our adidas Originals lifestyle pieces, that
            can be worn as sportswear too. Our lives are constantly changing.
            Becoming more and more versatile. And adidas designs with that in
            mind.
          </p>
        </div>
      </div>
      {/* ................................. */}
    </>
  );
};
