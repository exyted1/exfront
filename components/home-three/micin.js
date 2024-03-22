import React, { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import CountUp from "react-countup";


export default function Micin() {

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
    <div className="fugu--hero-section2">
      <div className="container">
        <div className="fugu--hero-content">
		<div className="fugu--counter-wrap wow fadeInUpX" data-wow-delay="0.30s">
						<div className="fugu--counter-data">
							<h2>
								<span data-percentage="100" className="fugu--counter">
									<CountUp end={7777} />
								</span>
							</h2>
							<p>
								<strong> Exclusive NFT</strong>
							</p>
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
		  <div className="fugu--default-content content-sm">
            <center><p>
			this is an exclusive NFT collections consisting of 777 unique characters with a total limited supply of 7777 nfts, designed to be collectible and iconic to our community. as well as being an exclusive identity marker, the exclusive nft also serves as a tool to identify early contributors to our project and holders of this exclusive nft will receive a variety of special functions and benefits, given that they are a top priority for our community.
            </p></center>
          </div>
        </div>
      </div>
      <div className="fugu--shape1">
        <img src="/images/shape2/shape1.png" alt="" />
      </div>

      {/* Popup Video */}
        </div>
  );
}
