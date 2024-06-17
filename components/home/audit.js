import React, { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import CountUp from "react-countup";


export default function Audit() {

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
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
	  {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
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
                                OUR PARTNERS
								</span>
							</h2>
						</div>
					</div>
        </div>
        <div className="fugu--slider-one">
          <Slider {...settings}>
          <a href="https://www.pinksale.finance/solana/launchpad/9nAFikRNTRwqaFvt2V6N4FCQ5GS7thTPHLqbsfMPjKoM" target="_blank">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/partnerts/pinksale.png" alt="" />
							</div>
						</div>
            </a>
            <a href="https://www.dexview.com/" target="_blank">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/partnerts/dexview.png" alt="" />
							</div>
						</div>
            </a>
            < a href="https://coinsult.net/projects/mink-coin/" target="_blank">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/partnerts/audit.png" alt="" />
							</div>
						</div>
            </a>
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
