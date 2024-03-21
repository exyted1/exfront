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
            <div className="animate-video">
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
          </div>
          </div>
        </div>
        <div className="fugu--slider-one">
          <Slider {...settings}>
		  <div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/1.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/2.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/3.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/4.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/5.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/6.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/7.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/8.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/9.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/10.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/11.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/12.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/13.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/14.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/15.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/16.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/17.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/18.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/19.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/20.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/21.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/22.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/23.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/24.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/25.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/26.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/27.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/28.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/29.jpg" alt="" />
							</div>
						</div>
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/all-img/nft/30.jpg" alt="" />
							</div>
						</div>
          </Slider>
        </div>
      </div>
      <div className="fugu--shape1">
        <img src="/images/shape2/shape1.png" alt="" />
      </div>

      {/* Popup Video */}
        </div>
  );
}
