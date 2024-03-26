import React, { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";


export default function CardSliderOne() {

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="fugu--slider-section">
      <div className="container">
        <div className="fugu--section-title">
          <div className="fugu--default-content content-sm">
            <h2>MISSION</h2>
            <p>
			Minkspace aims to bring a breath of fresh momment to the meme coin and nft ecosystem,
 Webelieve that clarity and ease of use will drive widespread adoption in the future, thus
 creating a sustainable ecosystem. By integrating NFTs and meme coin with this system we
 aim to increase the intrinsic value of both NFTs and meme coins, making them not only
 collectible assets, but also assets that can provide significant economic value benefits to
 their holders in the long term.
            </p>
          </div>
        </div>
      </div>
      <div className="fugu--shape1">
        <img src="/images/shape2/shape1.png" alt="" />
      </div>

      {/* <div className="animate-video">
            <iframe style={{
                borderRadius: "15px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
              title="NFT Collection Video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/szalnsmIqQQ"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}
        </div>
  );
}
